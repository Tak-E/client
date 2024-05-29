// Byeonghyeon Kang

import { useState } from "react";
import styles from "./UserInfo.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const UserInfo = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    age: "",
    sex: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = () => {
    if (userInfo.age === "" || userInfo.sex === "") {
      setErrorMessage("나이와 성별을 모두 입력해주세요.");
      return;
    }

    if (isNaN(userInfo.age)) {
      setErrorMessage("나이는 숫자로 입력해주세요.");
      return;
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    navigate("/");
  };

  return (
    <section className={styles.section}>
      {errorMessage !== "" && (
        <Modal onClose={() => setErrorMessage("")} description={errorMessage} />
      )}
      <div className={styles.container}>
        <h1 className={styles.title}>성별과 나이를 입력해주세요.</h1>
        <form>
          <div className={styles.flexBox}>
            <label htmlFor="age" className={styles.age}>
              AGE
            </label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="나이를 입력하세요."
              onChange={onChange}
              className={styles.inputAge}
            />
          </div>
          <div className={styles.select}>
            <div>
              <input
                name="sex"
                type="radio"
                value="woman"
                id="woman"
                onChange={onChange}
              />
              <label htmlFor="woman">여자</label>
            </div>
            <div>
              <input
                name="sex"
                type="radio"
                id="man"
                value="man"
                onChange={onChange}
              />
              <label htmlFor="man">남자</label>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className={styles.button}
          >
            선택 완료
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserInfo;
