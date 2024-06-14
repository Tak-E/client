function hasCategory(act) {
  const currentSimpleEmotion = localStorage.getItem("currentEmotion");
  // const currentDetailEmotion = ["즐거운"];
  const currentDetailEmotion = localStorage
    .getItem("selected-emotions")
    .split(",");
  if (currentDetailEmotion.length > 0) {
    // 상세 감정을 입력 했을 때
    return act.category.some((elem) => currentDetailEmotion.includes(elem));
  } else {
    // 간단한 감정만 입력 했을 때
    return currentSimpleEmotion === act.type;
  }
}

export function filterActivities(activities) {
  const currentStress = localStorage.getItem("stress");

  const todoActIdList = localStorage.getItem("selected-activities")
    ? JSON.parse(localStorage.getItem("selected-activities"))
        .filter((activity) => !activity.isCompleted)
        .map((activity) => activity.id)
    : [];

  const completeActIdList = localStorage.getItem("selected-activities")
    ? JSON.parse(localStorage.getItem("selected-activities"))
        .filter((activity) => activity.isCompleted)
        .map((activity) => activity.id)
    : [];

  const tdActIdList = localStorage.getItem("selected-activities")
    ? JSON.parse(localStorage.getItem("selected-activities"))
        .filter((activity) => !activity.selectedLikeStatus)
        .map((activity) => activity.id)
    : [];

  const tagScores = JSON.parse(localStorage.getItem("tagScore"));

  // 해야 할 활동 / 수행 했던 활동 / 싫어한 활동들 합집합 구하기
  const excludeIdList = Array.from(
    new Set([...todoActIdList, ...completeActIdList, ...tdActIdList])
  );

  // 해야 할 활동 / 수행 했던 활동 / 싫어한 활동들 리스트에서 배제
  excludeIdList
    .sort((a, b) => b - a)
    .forEach((excludeId) => {
      delete activities[excludeId];
    });

  const dict = {};
  activities.forEach((act) => {
    // 스트레스 지수 필터링
    if (
      currentStress < act.low_threshold ||
      currentStress > act.high_threshold
    ) {
      return;
    }

    // 감정 카테고리 필터링
    if (!hasCategory(act)) {
      return;
    }

    // 리스트업
    const tag = act.tags[0];
    if (!dict[tag]) {
      dict[tag] = [];
    }

    // dict[tag].push(act.title);
    dict[tag].push(act);
  });

  // 좋아요/싫어요 스코어 + 사전순으로 소팅
  const tagList = Object.keys(dict);
  tagList.sort((a, b) => tagScores[b] - tagScores[a] || a.localeCompare(b));

  // 도출한 리스트들 병합
  const result = [[], [], []];
  tagList.forEach((tag, i) => {
    result[i % 3].push(...dict[tag]);
  });

  return result;
}
