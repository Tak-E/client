// Byeonghyeon Kang

import { useState } from "react";
import styles from "./ActivityRecommendation.module.css";
import { activities } from "../../data/activities";
import { filterActivities } from "../../util";
import { Link, useNavigate } from "react-router-dom";
import getActivityCover from "../../data/getActivityCover";
import Modal from "../../components/Modal/Modal";

const ActivityRecommendation = () => {
  const navigate = useNavigate();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // const selectedCategories = useRef(
  //   localStorage.getItem("selected-emotions").split(",")
  // );

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  const handleActivityChoice = () => {
    if (selectedActivity === null) {
      setErrorMessage("활동을 선택해주세요");
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
    }
    navigate("/");
  };

  const filteredActivities = filterActivities(activities);
  console.log("filteredActivities:", filteredActivities);

  const handleNavigateCategory = () => {
    navigate("/category");
  };

  return (
    <>
      {errorMessage !== "" && (
        <Modal onClose={() => setErrorMessage("")} description={errorMessage} />
      )}
      <Link
        style={{
          position: "absolute",
          margin: "10px",
          color: "#FBC20F",
          fontSize: "20px",
        }}
        to="/category"
      >
        {"<"} 뒤로가기
      </Link>
      <section className={styles.container}>
        <div>
          <h1 className={styles.title}>이런 활동을 해보는건 어떨까요?</h1>
          {filteredActivities[0].length +
            filteredActivities[1].length +
            filteredActivities[2].length ===
          0 ? (
            <p className={styles.empty}>추천할 활동이 없습니다!</p>
          ) : (
            <ul className={styles.activities}>
              {/* {activities.map((activity) => (
                <li
                  key={activity.id}
                  className={`${styles.activity} ${
                    selectedActivity?.id === activity.id && styles.selected
                  }`}
                  onClick={() => handleActivityClick(activity)}
                >
                  <div
                    className={styles.activityImage}
                    style={{
                      backgroundImage: `url(${getActivityCover(
                        activity.tags
                      )})`,
                    }}
                  ></div>
                  <h2 className={styles.activityName}>
                    {activity.title}
                    <p className={styles.tooltip}>{activity.title}</p>
                  </h2>
                  <p className={styles.description}>{activity.description}</p>
                </li>
              ))} */}

              <li
                key={filteredActivities[0][0].id}
                className={`${styles.activity} ${
                  selectedActivity?.id === filteredActivities[0][0].id &&
                  styles.selected
                }`}
                onClick={() => handleActivityClick(filteredActivities[0][0])}
              >
                <div
                  className={styles.activityImage}
                  style={{
                    backgroundImage: `url(${getActivityCover(
                      filteredActivities[0][0].tags
                    )})`,
                  }}
                ></div>
                <h2 className={styles.activityName}>
                  {filteredActivities[0][0].title}
                  <p className={styles.tooltip}>
                    {filteredActivities[0][0].title}
                  </p>
                </h2>
                <p className={styles.description}>
                  {filteredActivities[0][0].description}
                </p>
              </li>

              <li
                key={filteredActivities[1][0].id}
                className={`${styles.activity} ${
                  selectedActivity?.id === filteredActivities[1][0].id &&
                  styles.selected
                }`}
                onClick={() => handleActivityClick(filteredActivities[1][0])}
              >
                <div
                  className={styles.activityImage}
                  style={{
                    backgroundImage: `url(${getActivityCover(
                      filteredActivities[1][0].tags
                    )})`,
                  }}
                ></div>
                <h2 className={styles.activityName}>
                  {filteredActivities[1][0].title}
                  <p className={styles.tooltip}>
                    {filteredActivities[1][0].title}
                  </p>
                </h2>
                <p className={styles.description}>
                  {filteredActivities[1][0].description}
                </p>
              </li>

              <li
                key={filteredActivities[2][0].id}
                className={`${styles.activity} ${
                  selectedActivity?.id === filteredActivities[2][0].id &&
                  styles.selected
                }`}
                onClick={() => handleActivityClick(filteredActivities[2][0])}
              >
                <div
                  className={styles.activityImage}
                  style={{
                    backgroundImage: `url(${getActivityCover(
                      filteredActivities[2][0].tags
                    )})`,
                  }}
                ></div>
                <h2 className={styles.activityName}>
                  {filteredActivities[2][0].title}
                  <p className={styles.tooltip}>
                    {filteredActivities[2][0].title}
                  </p>
                </h2>
                <p className={styles.description}>
                  {filteredActivities[2][0].description}
                </p>
              </li>
            </ul>
          )}
          {activities.length > 1 ? (
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleActivityChoice}>
                이걸로 할게요
              </button>
            </div>
          ) : (
            <div className={styles.buttonContainer}>
              <button
                className={styles.button}
                onClick={handleNavigateCategory}
              >
                다시 선택하기
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ActivityRecommendation;
