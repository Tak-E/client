// Byeonghyeon Kang

import { useRef, useState } from "react";
import styles from "./ActivityRecommendation.module.css";
import { activities } from "../../data/activities";
import { filterActivities } from "../../util";
import { useNavigate } from "react-router-dom";

// const activities = [
//   {
//     image:
//       "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
//     title: "따듯한 차 한잔 마시기",
//     description: "차 한잔을 마시면서 우울한 마음을 진정시켜보세요.",
//     happyStatus: "행복지수(int)",
//     emotion: "감정상태",
//   },
//   {
//     image:
//       "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
//     title: "따듯한 차 한잔 마시기",
//     description: "차 한잔을 마시면서 우울한 마음을 진정시켜보세요.",
//     happyStatus: "행복지수(int)",
//     emotion: "감정상태",
//   },
//   {
//     image:
//       "https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/jqPSSIsMrKiOfOZEvcRVkTCdhYrzBWuh.png",
//     title: "따듯한 차 한잔 마시기",
//     description: "차 한잔을 마시면서 우울한 마음을 진정시켜보세요.",
//     happyStatus: "행복지수(int)",
//     emotion: "감정상태",
//   },
// ];

const ActivityRecommendation = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const navigate = useNavigate();

  const selectedCategories = useRef(
    localStorage.getItem("selected-emotions").split(",")
  );

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  const handleActivityChoice = () => {
    if (selectedActivity === null) {
      alert("활동을 선택해주세요");
      return;
    }
    if (!localStorage.getItem("selected-activities")) {
      localStorage.setItem(
        "selected-activities",
        JSON.stringify([selectedActivity])
      );
    } else {
      const selectedActivities = localStorage.getItem("selected-activities");

      localStorage.setItem(
        "selected-activities",
        JSON.stringify([...JSON.parse(selectedActivities), selectedActivity])
      );
      console.log(selectedActivities);
    }
    navigate("/");
  };

  console.log(filterActivities(activities, selectedCategories.current));

  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>이런 활동을 해보는건 어떨까요?</h1>
        <ul className={styles.activities}>
          {filterActivities(activities, selectedCategories.current)
            .slice(0, 3)
            .filter((activity) => !activity.isCompleted)
            .map((activity) => (
              <li
                key={activity.id}
                className={`${styles.activity} ${
                  selectedActivity?.id === activity.id && styles.selected
                }`}
                onClick={() => handleActivityClick(activity)}
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
          <button className={styles.button} onClick={handleActivityChoice}>
            이걸로 할게요
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivityRecommendation;
