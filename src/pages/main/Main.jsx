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
import SpeechBubble from "../../assets/speech-bubble.png";

const SPEECH_BUBBLE = [
  "감정에 맞는 활동을 추천해줄께!",
  "스트레스를 해소를 위한 활동을 추천해줄께!",
  "어떤 활동을 추천해줄까?",
  "왼쪽 위의 해를 눌러봐!",
  "반가워!",
  "안녕!",
  "오늘의 기분은 어때?",
  "이곳의 날씨는 너무 좋아! 너는 어때?",
  "힘이 안나면 힘나게 도와줄게!",
  "오늘도 파이팅!",
  "히히",
  "오늘도 밝게 웃어봐! 좋은 일이 가득해질거야",
  "오늘도 힘차게!",
];

const Main = () => {
  const navigate = useNavigate();
  const [isShowStressInputModal, setIsShowStressInputModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [speechText, setSpeechText] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/user-info");
    }

    const randomText = () => {
      return SPEECH_BUBBLE[Math.floor(Math.random() * SPEECH_BUBBLE.length)];
    };

    setSpeechText(randomText());

    const interval = setInterval(() => {
      setSpeechText(randomText());
    }, 4000);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    if (!localStorage.getItem("selected-activities")) {
      return;
    }

    const activities = localStorage.getItem("selected-activities");

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
      <div
        className={`${styles.speechBubbleContainer}`}
        style={{ backgroundImage: `url(${SpeechBubble})` }}
      >
        <p>{speechText}</p>
      </div>

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
          <span className={styles.tooltip}>활동 기록</span>
        </Link>
        <Link
          to="/category"
          className={`${styles.toolbarIcon} ${styles.smile}`}
        >
          <img src={smileIcon} alt="smile-icon" />
          <span className={styles.tooltip}>감정 선택</span>
        </Link>
        <button
          onClick={() => setIsShowStressInputModal(true)}
          className={`${styles.toolbarIcon} ${styles.stress}`}
        >
          <img src={stressIcon} alt="stress-icon" />
          <span className={styles.tooltip}>스트레스 지수 입력</span>
        </button>
      </div>
    </div>
  );
};

export default Main;
