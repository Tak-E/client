// Taejin Kim

import { useState } from "react";
import styles from "./Category.module.css";
import { useNavigate } from "react-router-dom";

const EMOTIONS = [
  {
    id: 0,
    title: "신나는",
  },
  {
    id: 1,
    title: "쾌활한",
  },
  {
    id: 2,
    title: "설레는",
  },
  {
    id: 3,
    title: "슬픈",
  },
  {
    id: 4,
    title: "우울한",
  },
  {
    id: 5,
    title: "열망적인",
  },
  {
    id: 6,
    title: "감동한",
  },
  {
    id: 7,
    title: "대견한",
  },
  {
    id: 8,
    title: "즐거운",
  },
  {
    id: 9,
    title: "의욕적인",
  },
  {
    id: 10,
    title: "후련한",
  },
  {
    id: 11,
    title: "고민되는",
  },
  {
    id: 12,
    title: "행복한",
  },
  {
    id: 13,
    title: "감사한",
  },
  {
    id: 14,
    title: "평온한",
  },
  {
    id: 15,
    title: "짜증나는",
  },
  {
    id: 16,
    title: "괴로운",
  },
  {
    id: 17,
    title: "속상한",
  },
  {
    id: 18,
    title: "분한",
  },
  {
    id: 19,
    title: "후회되는",
  },
  {
    id: 20,
    title: "두려운",
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
    localStorage.setItem("selected-emotions", selectedEmotions);
    navigate("/activity-recommendation");
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>현재 느끼는 자세한 감정을 선택해주세요!</h1>
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
