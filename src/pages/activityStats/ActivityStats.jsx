// Byeonghyeon Kang

import styles from "./ActivityStats.module.css";
// import DefaultStar from "../../assets/star--default.svg";
// import HalfStar from "../../assets/star--half.svg";
// import ActiveStar from "../../assets/star--active.svg";
import { useEffect, useState } from "react";
import MemoModal from "../../components/Modal/MemoModal";
import getActivityCover from "../../data/getActivityCover";
import { Link } from "react-router-dom";

const ActivityStats = () => {
  const [activities, setActivities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("selected-activities")) {
      return;
    }

    const activities = JSON.parse(localStorage.getItem("selected-activities"));
    setActivities(
      activities.filter((activity) => activity.isCompleted).reverse()
    );
  }, []);

  // const renderStar = (star) => {
  //   const stars = [];
  //   const fullStars = Math.floor(star);
  //   const hasHalfStar = star % 1 !== 0;

  //   for (let i = 0; i < 5; i++) {
  //     if (i < fullStars) {
  //       stars.push(
  //         <li key={i} className={styles.list}>
  //           <img src={ActiveStar} alt="Active star" className={styles.star} />
  //         </li>
  //       );
  //     } else if (i === fullStars && hasHalfStar) {
  //       stars.push(
  //         <li key={i} className={styles.list}>
  //           <img src={HalfStar} alt="Half star" className={styles.star} />
  //         </li>
  //       );
  //     } else {
  //       stars.push(
  //         <li key={i} className={styles.list}>
  //           <img src={DefaultStar} alt="Default star" className={styles.star} />
  //         </li>
  //       );
  //     }
  //   }
  //   return stars;
  // };

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  const updateMemo = (id, newMemo) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, memo: newMemo } : activity
      )
    );
  };

  return (
    <>
      <Link
        style={{
          position: "absolute",
          margin: "10px",
          color: "#FBC20F",
          fontSize: "20px",
        }}
        to="/"
      >
        {"<"} 뒤로가기
      </Link>
      <section className={styles.container}>
        <div className={styles.baseContainer}>
          <div className={styles.pageTitleContainer}>
            <h1 className={styles.pageTitle}>최근 7일간의 활동</h1>
          </div>
          <div className={styles.innerContainer}>
            <ul>
              {activities.map((activity, key) => (
                <li
                  key={key}
                  className={styles.activity}
                  onClick={() => handleActivityClick(activity)}
                >
                  <div
                    className={styles.imageContainer}
                    style={{
                      backgroundImage: `url(${getActivityCover(
                        activity.tags
                      )})`,
                    }}
                  ></div>
                  <div>
                    <div className={styles.activityInfo}>
                      <h2 className={styles.title}>{activity.title}</h2>
                      {/* <ul className={styles.stars}>
                        {renderStar(activity.rating)}
                      </ul> */}
                      <ul className={styles.tags}>
                        {activity.category.map((tag, i) => (
                          <li key={i} className={styles.tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className={styles.memo}>{activity.memo}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {isModalOpen && selectedActivity && (
            <MemoModal
              onClose={handleCloseModal}
              title={selectedActivity.title}
              memo={selectedActivity.memo}
              id={selectedActivity.id}
              updateMemo={updateMemo}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default ActivityStats;
