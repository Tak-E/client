import styles from "./Emotion.module.css";
import veryBadImage from "../../assets/emotions/very-bad.png";
import badImage from "../../assets/emotions/bad.png";
import sosoImage from "../../assets/emotions/soso.png";
import happyImage from "../../assets/emotions/happy.png";
import veryHappyImage from "../../assets/emotions/very-happy.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const buttonEmotion = [
  {
    id: 1,
    image: veryBadImage,
    emotion: "negative",
  },
  {
    id: 2,
    image: badImage,
    emotion: "negative",
  },
  {
    id: 3,
    image: sosoImage,
    emotion: "normal",
  },
  {
    id: 4,
    image: happyImage,
    emotion: "positive",
  },
  {
    id: 5,
    image: veryHappyImage,
    emotion: "positive",
  },
];

const Emotion = () => {
  const navigate = useNavigate();
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("currentEmotion", selectedEmotion);

    if (selectedEmotion === "") {
      setErrorMessage("감정을 선택해주세요!");
      return;
    }

    navigate("/category");
  };

  const handleClickEmotion = (id, emotion) => {
    setSelectedEmotionId(id);
    setSelectedEmotion(emotion);
  };

  return (
    <div className={styles.container}>
      <Link
        style={{
          position: "absolute",
          margin: "10px",
          color: "#FBC20F",
          fontSize: "20px",
        }}
        to="/"
      >
        {"<"} 뒤로가기
      </Link>
      {errorMessage !== "" && (
        <Modal onClose={() => setErrorMessage("")} description={errorMessage} />
      )}
      <h1 className={styles.title}>현재 느끼는 감정을 선택해주세요!</h1>
      <div className={styles.innerContainer}>
        {buttonEmotion.map(({ id, image, emotion }) => (
          <div
            key={id}
            className={`${styles.emotionButton} ${
              selectedEmotionId === id ? styles.selected : ""
            }`}
            alt={`감정상태는 ${emotion}}`}
            onClick={() => handleClickEmotion(id, emotion)}
          >
            <img src={image} />
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSubmit}>
          선택완료
        </button>
      </div>
    </div>
  );
};

export default Emotion;
