// Taejin Kim

import styles from "./Main.module.css";
import controlImg from "../../assets/control.svg";
import characterImg from "../../assets/character.svg";
import sunImg from "../../assets/sun.svg";
import toggleImg from "../../assets/toolbar.svg";
import graphIcon from "../../assets/graph.svg";
import smileIcon from "../../assets/smile.svg";
import stressIcon from "../../assets/stress.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StressInputModal from "../../components/Modal/StressInputModal";
import Activity from "../../components/Activity/Activity";

const Main = () => {
  const navigate = useNavigate();
  const [isShowStressInputModal, setIsShowStressInputModal] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/user-info");
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("selected-activities")) {
      return;
    }

    const activities = localStorage.getItem("selected-activities");
    // console.log(typeof activities);
    // setActivities([...JSON.parse(activities)]);
    // console.log(activities[0]);

    setActivities([...JSON.parse(activities)]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.activitiesContainer}>
        {activities.map(
          (activity) =>
            !activity.isCompleted && (
              <Activity key={activity.id} activity={activity} />
            )
        )}
      </div>
      {isShowStressInputModal && (
        <StressInputModal onClose={() => setIsShowStressInputModal(false)} />
      )}
      <div>
        <div className={styles.bg}></div>
        <div className={styles.bgGrass}></div>
      </div>

      <img
        className={`${styles.control} ${styles.alignCenter}`}
        src={controlImg}
        alt="control-img"
      />
      <img
        className={`${styles.character} ${styles.alignCenter}`}
        src={characterImg}
        alt="character-img"
      />
      <img className={styles.sun} src={sunImg} alt="sun-img" />
      <img
        className={`${styles.toggle} ${styles.alignCenter}`}
        src={toggleImg}
        alt="toolbar-img"
      />

      <div className={styles.toolbar}>
        <Link
          to="/activity-stats"
          className={`${styles.toolbarIcon} ${styles.graph}`}
        >
          <img src={graphIcon} alt="graph-icon" />
        </Link>
        <Link
          to="/category"
          className={`${styles.toolbarIcon} ${styles.smile}`}
        >
          <img src={smileIcon} alt="smile-icon" />
        </Link>
        <button
          onClick={() => setIsShowStressInputModal(true)}
          className={`${styles.toolbarIcon} ${styles.stress}`}
        >
          <img src={stressIcon} alt="stress-icon" />
        </button>
      </div>
    </div>
  );
};

export default Main;
