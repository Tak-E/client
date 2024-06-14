// export const extractActivitiesByCategory = (activities, category) => {
//   return activities.filter((activity) => activity.category.includes(category));
// };

// export const extractActivitiesByCategories = (activities, categories) => {
//   const result = [];

//   categories.forEach((category) => {
//     const extractedActivities = extractActivitiesByCategory(
//       activities,
//       category
//     );

//     if (extractedActivities.length > 0) {
//       result.push(...extractActivitiesByCategory(activities, category));
//     }
//   });

//   return result;
// };

// export const filterActivities = (activities, categories) => {
//   const preferringActivityType = localStorage.getItem(
//     "preferfing-activity-type"
//   );
//   const dislikingActivityType = localStorage.getItem("dislike-activity-type");
//   const stress = localStorage.getItem("stress");

//   let results = extractActivitiesByCategories(activities, categories);
//   const preferringActivities = [];
//   const dislikingActivities = [];
//   console.log("results:", results);
//   results = results.filter((result) => {
//     if (result.tags.includes(preferringActivityType)) {
//       preferringActivities.push(result);
//       return false;
//     }

//     if (result.tags.includes(dislikingActivityType)) {
//       dislikingActivities.push(result);
//       console.log(dislikingActivities);
//       return false;
//     }

//     return true;
//   });

//   console.log("after results:", results);

//   if (!stress) {
//     return [...preferringActivities, ...results, ...dislikingActivities];
//   }

//   return [...preferringActivities, ...results, ...dislikingActivities].filter(
//     (item) => item.low_threshold <= stress && stress <= item.high_threshold
//   );
// };

// 경계선

const currentStress = localStorage.getItem("stress");
const currentSimpleEmotion = localStorage.getItem("currentEmotion");
// const currentDetailEmotion = ["즐거운"];
const currentDetailEmotion = localStorage
  .getItem("selected-emotions")
  .split(",");

// const todoActIdList = [0];
// const completeActIdList = [4, 2, 3, 1, 4];
// const tdActIdList = [5, 4];

const todoActIdList = JSON.parse(
  localStorage.getItem("selected-activities")
).filter((activity) => !activity.isCompleted);
const completeActIdList = JSON.parse(
  localStorage.getItem("selected-activities")
).filter((activity) => activity.isCompleted);
const tdActIdList = JSON.parse(
  localStorage.getItem("selected-activities")
).filter((activity) => !activity.selectedLikeStatus);

const tagScores = {
  음악: 3,
  도전하기: -1,
  말해보기: 0,
  식사: 0,
  쇼핑하기: 0,
  씻기: 0,
  방문하기: 0,
  여행: 0,
  산책: 0,
  "진정하기-실내": 0,
  "진정하기-야외": 0,
  독서: 2,
  적어보기: 0,
  운동: 1,
  그려보기: 0,
  영화: 5,
  사진: 0,
  청소: 0,
  요리: 0,
  친구: 0,
};

function hasCategory(act) {
  if (currentDetailEmotion.length > 0) {
    // 상세 감정을 입력 했을 때
    return act.category.some((elem) => currentDetailEmotion.includes(elem));
  } else {
    // 간단한 감정만 입력 했을 때
    return currentSimpleEmotion === act.type;
  }
}

export function filterActivities(activities) {
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

  console.log(`extracted tags: ${tagList}`);

  // 도출한 리스트들 병합
  const result = [[], [], []];
  tagList.forEach((tag, i) => {
    result[i % 3].push(...dict[tag]);
  });

  // 3개의 각 리스트 출력
  result.forEach((list) => {
    console.log(list);
    console.log("=======================");
  });

  return result;
}
