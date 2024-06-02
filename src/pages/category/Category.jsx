// Taejin Kim

import { useState } from "react";
import styles from "./Category.module.css";
import { useNavigate } from "react-router-dom";

const EMOTIONS = [
  {
    id: 0,
    title: "우울한",
  },
  {
    id: 1,
    title: "분한",
  },
  {
    id: 2,
    title: "후회되는",
  },
  {
    id: 3,
    title: "서운한",
  },
  {
    id: 4,
    title: "두려운",
  },
  {
    id: 5,
    title: "의욕적인",
  },
  {
    id: 6,
    title: "즐거운",
  },
  {
    id: 7,
    title: "설레는",
  },
  {
    id: 8,
    title: "기쁜",
  },
  {
    id: 9,
    title: "행복한",
  },
  {
    id: 10,
    title: "평온한",
  },
  {
    id: 11,
    title: "여유로운",
  },
  {
    id: 12,
    title: "나른한",
  },
  {
    id: 13,
    title: "경멸스러운",
  },
  {
    id: 14,
    title: "안심되는",
  },
];

const Category = () => {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const navigate = useNavigate();

  const handleSelectEmotion = (e) => {
    e.currentTarget.classList.toggle(styles.selected);
    setSelectedEmotions([...selectedEmotions, e.target.textContent]);
  };

  const handleSubmitEmotions = () => {
    if (selectedEmotions.length === 0) {
      alert("감정을 1개 이상 선택해주세요.");
      return;
    }
    localStorage.setItem("selected-emotions", selectedEmotions);
    setSelectedEmotions([]);
    navigate("/activity-recommendation");
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          현재 느끼는 자세한 감정을 선택해주세요!
        </h1>
        <ul className={styles.emotions}>
          {EMOTIONS.map((emotion) => (
            <li
              key={emotion.id}
              className={styles.emotion}
              onClick={handleSelectEmotion}
            >
              {emotion.title}
            </li>
          ))}
        </ul>
        <button className={styles.button} onClick={handleSubmitEmotions}>
          선택완료
        </button>
      </div>
    </div>
  );
};

export default Category;
