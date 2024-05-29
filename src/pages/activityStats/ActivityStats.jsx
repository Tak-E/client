// Byeonghyeon Kang

import styles from "./ActivityStats.module.css";
import DefaultStar from "../../assets/star--default.svg";
import ActiveStar from "../../assets/star--active.svg";
import { useState } from "react";
import MemoModal from "../../components/Modal/MemoModal";

const activityStats = [
  {
    key: 1,
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "집콕하며 영화보기",
    star: 3,
    description:
      "친구 초대해서 같이 차마시기! 요즘 바쁜 일상에 지쳐있었는데, 여유롭게 차 한잔하니 마음이 편해졌다. 종종 차를 내려먹어봐야겠다 ",
  },
  {
    key: 2,
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "집콕하며 영화보기",
    star: 1,
    description:
      "친구 초대해서 같이 차마시기! 요즘 바쁜 일상에 지쳐있었는데, 여유롭게 차 한잔하니 마음이 편해졌다. 종종 차를 내려먹어봐야겠다 ",
  },
  {
    key: 3,
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "집콕하며 영화보기",
    star: 2,
    description:
      "친구 초대해서 같이 차마시기! 요즘 바쁜 일상에 지쳐있었는데, 여유롭게 차 한잔하니 마음이 편해졌다. 종종 차를 내려먹어봐야겠다 ",
  },
  {
    key: 4,
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "집콕하며 영화보기",
    star: 5,
    description:
      "친구 초대해서 같이 차마시기! 요즘 바쁜 일상에 지쳐있었는데, 여유롭게 차 한잔하니 마음이 편해졌다. 종종 차를 내려먹어봐야겠다 ",
  },
  {
    key: 5,
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "집콕하며 영화보기",
    star: 3,
    description:
      "친구 초대해서 같이 차마시기! 요즘 바쁜 일상에 지쳐있었는데, 여유롭게 차 한잔하니 마음이 편해졌다. 종종 차를 내려먹어봐야겠다 ",
  },
];

const ActivityStats = () => {
  const [isRender, setIsRender] = useState(false);

  const renderStar = (star) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < star) {
        stars.push(
          <li key={i} className={styles.list}>
            <img src={ActiveStar} alt="Active star" className={styles.star} />
          </li>
        );
      } else {
        stars.push(
          <li key={i} className={styles.list}>
            <img src={DefaultStar} alt="Default star" className={styles.star} />
          </li>
        );
      }
    }
    return stars;
  };

  return (
    <section className={styles.container}>
      {isRender && <MemoModal onClose={() => setIsRender(false)} />}
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>최근 7일간의 활동</h1>
      </div>
      <div className={styles.innerContainer}>
        <ul>
          {activityStats.map((activityStat, key) => (
            <li
              key={key}
              className={styles.activity}
              onClick={() => setIsRender(true)}
            >
              <div
                className={styles.imageContainer}
                style={{ backgroundImage: `url(${activityStat.image})` }}
              ></div>
              <div>
                <div className={styles.activityInfo}>
                  <h2 className={styles.title}>{activityStat.title}</h2>
                  <ul className={styles.stars}>
                    {renderStar(activityStat.star)}
                  </ul>
                </div>
                <p className={styles.description}>{activityStat.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActivityStats;
