import styles from "./Emotion.module.css";
import EmotionsImage from "../../assets/emotions.png";
import { useState } from "react";

const Emotion = () => {
  const [selectedEmotion, setSelectedEmotion] = useState("");

  const handleSubmit = () => {
    console.log("hello world!");
  };

  const handleClickEmotion = (emotion) => {
    console.log(emotion);
  };

  const buttonEmotion = ["부정", "부정", "보통", "긍정", "긍정"];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>현재 느끼는 감정을 선택해주세요!</h1>
      <div className={styles.emotionsImageContainer}>
        {buttonEmotion.map((emotion, index) => (
          <button
            key={index}
            className={`${styles.emotionButton} ${styles.active}`}
            onClick={() => handleClickEmotion(emotion)}
          />
        ))}
        <img src={EmotionsImage} className={styles.emotionsImage} />
      </div>
      <button className={styles.button} onClick={handleSubmit}>
        선택완료
      </button>
    </div>
  );
};

export default Emotion;
