// Byeonghyeon Kang

import { useState } from "react";
import styles from "./Modal.module.css";
import ModalContainer from "./ModalContainer";

const MemoModal = ({ onClose, id, title, memo }) => {
  const [inputMemo, setInputMemo] = useState(memo);

  const handleClose = () => {
    onClose?.();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputMemo(value);
  };

  const handleClick = () => {
    console.log(memo);
    handleClose();
  };

  return (
    <ModalContainer>
      <div className={styles.overlay}>
        <div className={`${styles.container} ${styles.memoModal}`}>
          <div className={styles.inner}>
            <h1 className={styles.innerTitle}>
              {title} 활동에 대해 기록해보세요!
            </h1>
            <textarea
              name="memo"
              value={inputMemo}
              placeholder="| 활동에 대한 기록을 남겨보세요..."
              onChange={handleChange}
              className={styles.memo}
            />
            <button onClick={handleClick} className={styles.button}>
              선택완료
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default MemoModal;
