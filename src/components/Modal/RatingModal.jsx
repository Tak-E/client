// Byeonghyeon Kang

import getActivityCover from "../../data/getActivityCover";
import styles from "./Modal.module.css";
import ModalContainer from "./ModalContainer";
import { useState } from "react";
import { useNavigate } from "react-router";
import Like from "../../assets/like.png";
import UnLike from "../../assets/unlike.png";

const RatingModal = ({ onClose, id, title, memo, activity }) => {
  const [selectedLikeStatus, setSelectedLikeStatus] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    onClose?.();
  };

  const handleClick = () => {
    const selectedActivities = localStorage.getItem("selected-activities");

    const ratingUpdatedActivities = [
      ...JSON.parse(selectedActivities).map((item) => {
        if (item.id == activity.id) {
          if (selectedLikeStatus === "like") {
            return { ...item, selectedLikeStatus: true, isCompleted: true };
          }
          return { ...item, selectedLikeStatus: false, isCompleted: true };
        }
        return item;
      }),
    ];

    localStorage.setItem(
      "selected-activities",
      JSON.stringify(ratingUpdatedActivities)
    );

    const tagScore = JSON.parse(localStorage.getItem("tagScore"));

    activity.tags.forEach((tag) => {
      if (selectedLikeStatus === "like") {
        tagScore[tag] += 1;
      } else {
        tagScore[tag] -= 1;
      }
    });

    localStorage.setItem("tagScore", JSON.stringify(tagScore));

    navigate(0);
    handleClose();
  };

  const handleClickLikeButton = (likeStatus) => {
    setSelectedLikeStatus(likeStatus);
  };

  return (
    <ModalContainer>
      <div className={styles.overlay}>
        <div className={`${styles.container} ${styles.memoModal}`}>
          <div style={{ textAlign: "center" }} className={styles.ratingInner}>
            <h1 style={{ margin: "20px 0" }} className={styles.innerTitle}>
              방금 전 완료한 활동 수행 만족도는 어떠셨나요?
            </h1>
            <div
              className={styles.imageContainer}
              style={{
                backgroundImage: `url(${getActivityCover(activity.tags)})`,
              }}
            ></div>
            <div className={styles.ratingInput}>
              <h2 className={styles.activityTitle}>{activity.title}</h2>
              <div className={styles.buttonContainer}>
                <div
                  className={`${styles.ratingButton} ${
                    selectedLikeStatus === "like" ? styles.selected : ""
                  }`}
                >
                  <img
                    src={Like}
                    alt="like"
                    onClick={() => handleClickLikeButton("like")}
                  />
                </div>
                <div
                  className={`${styles.ratingButton} ${
                    selectedLikeStatus === "unlike" ? styles.selected : ""
                  }`}
                >
                  <img
                    src={UnLike}
                    alt="unlike"
                    onClick={() => handleClickLikeButton("unlike")}
                  />
                </div>
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
