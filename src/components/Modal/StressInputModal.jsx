import { useState } from "react";
import styles from "./Modal.module.css";
import ModalContainer from "./ModalContainer";

const StressInputModal = ({ onClose }) => {
  const [progress, setProgress] = useState(0);
  const handleClose = () => {
    localStorage.setItem("stress", progress);
    onClose?.();
  };

  const handleMouseMove = (e) => {
    const x = e.clientX - document.getElementById("stress-modal").offsetLeft;
    const xconvert = (x + 217) / 433;
    const finalx = xconvert.toFixed(2) * 100;
    setProgress(finalx);
  };

  return (
    <ModalContainer>
      <div className={styles.overlay}>
        <div
          id="stress-modal"
          className={`${styles.container} ${styles["container--stress-input"]}`}
        >
          <div className={styles.inner}>
            <h2 className={styles.innerTitle}>
              현재 느끼는 스트레스를 입력 해주세요
            </h2>
            <div
              className={styles.stressInput}
              onClick={handleClose}
              id="stressInput"
              onMouseMove={handleMouseMove}
            >
              <div
                style={{ width: `${progress}%` }}
                className={styles.progressBar}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default StressInputModal;
