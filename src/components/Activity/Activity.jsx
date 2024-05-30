import RatingModal from "../Modal/RatingModal";
import styles from "./Activity.module.css";
import { useState } from "react";

const Activity = ({ activity }) => {
  const [isRender, setIsRender] = useState(false);

  return (
    <div className={styles.container}>
      {isRender && (
        <RatingModal activity={activity} onClose={() => setIsRender(false)} />
      )}
      <h2 className={styles.title}>{activity.title}</h2>
      <button onClick={() => setIsRender(true)} className={styles.btn}>
        완료하기
      </button>
    </div>
  );
};

export default Activity;
