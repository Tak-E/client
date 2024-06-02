// Byeonghyeon Kang

import getActivityCover from "../../data/getActivityCover";
import styles from "./Modal.module.css";
import ModalContainer from "./ModalContainer";
import { useState } from "react";
import { useNavigate } from "react-router";

const RatingModal = ({ onClose, id, title, memo, activity }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleClose = () => {
    onClose?.();
  };

  const handleClick = () => {
    console.log(rating);

    const selectedActivities = localStorage.getItem("selected-activities");
    const ratingUpdatedActivities = [
      ...JSON.parse(selectedActivities).map((item) => {
        if (item.id == activity.id) {
          return { ...item, rating, isCompleted: true };
        }

        return item;
      }),
    ];
    localStorage.setItem(
      "selected-activities",
      JSON.stringify(ratingUpdatedActivities)
    );

    localStorage.setItem(
      rating > 3 ? "preferfing-activity-type" : "dislike-activity-type",
      activity.tags[0]
    );
    navigate(0);
    handleClose();
  };

  return (
    <ModalContainer>
      <div className={styles.overlay}>
        <div className={`${styles.container} ${styles.memoModal}`}>
          <div style={{ textAlign: "center" }} className={styles.ratingInner}>
            <h1 style={{ margin: "20px 0" }} className={styles.innerTitle}>
              방금 전 완료한 활동 수행 만족도는 어떠셨나요?
            </h1>
            <img
              style={{ position: "initial" }}
              width={150}
              src={getActivityCover(activity.tags)}
              alt="activity_cover"
            />
            <div className={styles.ratingInput}>
              <div>별점을 선택하세요.</div>
              <div className={styles.stars}>
                {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value, i) => (
                  <span
                    onClick={() => setRating(value)}
                    key={value}
                    className={`${styles.ratingStar} ${
                      rating >= value
                        ? (i + 1) % 2 !== 0
                          ? styles.selected_left
                          : styles.selected_right
                        : ""
                    }`}
                  ></span>
                ))}
              </div>
            </div>
            <button
              style={{ display: "block", margin: "0 auto" }}
              onClick={handleClick}
              className={styles.button}
            >
              선택완료
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default RatingModal;
