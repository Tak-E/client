const activitieStats = [
  {
    key: 1,
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "집콕하며 영화보기",
    star: 5,
    description:
      "친구 초대해서 같이 차마시기! 요즘 바쁜 일상에 지쳐있었는데, 여유롭게 차 한잔하니 마음이 편해졌다. 종종 차를 내려먹어봐야겠다 ",
  },
  {
    key: 2,
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "집콕하며 영화보기",
    star: 5,
    description:
      "친구 초대해서 같이 차마시기! 요즘 바쁜 일상에 지쳐있었는데, 여유롭게 차 한잔하니 마음이 편해졌다. 종종 차를 내려먹어봐야겠다 ",
  },
  {
    key: 3,
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "집콕하며 영화보기",
    star: 5,
    description:
      "친구 초대해서 같이 차마시기! 요즘 바쁜 일상에 지쳐있었는데, 여유롭게 차 한잔하니 마음이 편해졌다. 종종 차를 내려먹어봐야겠다 ",
  },
];

const ActivityStats = () => {
  return (
    <section>
      <div>
        <h1>최근 7일간의 활동</h1>
        <ul>
          {activitieStats.map((activitieStat, key) => (
            <li key={key}>
              <img src={activitieStat.image} alt={activitieStat.title} />
              <h2>{activitieStat.title}</h2>
              <div>{activitieStat.star}</div>
              <p>{activitieStat.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActivityStats;
