import styles from "./Activity.module.css";

const Activity = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.btn}>완료하기</button>
    </div>
  );
};

export default Activity;
