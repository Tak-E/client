import { useState } from "react";
import styles from "./ActivityRecommendation.module.css";

const activities = [
  {
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "따듯한 차 한잔 마시기",
    description: "차 한잔을 마시면서 우울한 마음을 진정시켜보세요.",
    happyStatus: "행복지수(int)",
    emotion: "감정상태",
  },
  {
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "따듯한 차 한잔 마시기",
    description: "차 한잔을 마시면서 우울한 마음을 진정시켜보세요.",
    happyStatus: "행복지수(int)",
    emotion: "감정상태",
  },
  {
    image:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
    title: "따듯한 차 한잔 마시기",
    description: "차 한잔을 마시면서 우울한 마음을 진정시켜보세요.",
    happyStatus: "행복지수(int)",
    emotion: "감정상태",
  },
];

const ActivityRecommendation = () => {
  const [selectedActivityIndex, setSelectedActivityIndex] = useState(null);

  const handleActivityClick = (index) => {
    setSelectedActivityIndex(index);
  };

  return (
    <section>
      <div>
        <h1>이런 활동을 해보는건 어떨까요?</h1>
        <ul className={styles.activities}>
          {activities.map((activity, index) => (
            <li
              key={index}
              className={`${styles.activity} ${
                selectedActivityIndex === index && styles.selected
              }`}
              onClick={() => handleActivityClick(index)}
            >
              <h2 className={styles.activityName}>{activity.title}</h2>
              <div
                className={styles.activityImage}
                style={{ backgroundImage: `url(${activity.image})` }}
              ></div>
              <p className={styles.description}>{activity.description}</p>
            </li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>이걸로 할게요</button>
        </div>
      </div>
    </section>
  );
};

export default ActivityRecommendation;
