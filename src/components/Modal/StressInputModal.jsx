import { useState } from "react";
import styles from "./Modal.module.css";
import ModalContainer from "./ModalContainer";

const StressInputModal = ({ onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isSelected, setIsSelected] = useState(0);

  const handleProgressbarClick = () => {
    setIsSelected(true);
  };

  const handleMouseMove = (e) => {
    if (isSelected) {
      return;
    }
    const x = e.clientX - document.getElementById("stress-modal").offsetLeft;
    const xconvert = (x + 217) / 433;
    const finalx = xconvert.toFixed(2) * 100;
    setProgress(finalx);
  };

  const handleSelectClick = () => {
    localStorage.setItem("stress", progress);
    onClose?.();
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
              onClick={handleProgressbarClick}
              id="stressInput"
              onMouseMove={handleMouseMove}
            >
              <div
                style={{ width: `${progress}%` }}
                className={styles.progressBar}
              ></div>
            </div>
            <div style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
              <button className={styles.button} onClick={onClose}>
                취소
              </button>
              <button className={styles.button} onClick={handleSelectClick}>
                선택완료
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default StressInputModal;
