import styles from "./Modal.module.css";
import ModalContainer from "./ModalContainer";

const Modal = ({ onClose, description }) => {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <ModalContainer>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <strong className={styles.description}>{description}</strong>
            <button
              type="button"
              onClick={handleClose}
              className={styles.button}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
