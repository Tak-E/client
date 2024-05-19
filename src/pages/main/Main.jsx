import styles from "./Main.module.css";
import controlImg from "../../assets/control.svg";
import characterImg from "../../assets/character.svg";
import sunImg from "../../assets/sun.svg";
import toggleImg from "../../assets/toolbar.svg";
import graphIcon from "../../assets/graph.svg";
import smileIcon from "../../assets/smile.svg";
import stressIcon from "../../assets/stress.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.container}>
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
        <Link className={`${styles.toolbarIcon} ${styles.graph}`}>
          <img src={graphIcon} alt="graph-icon" />
        </Link>
        <Link
          to="/category"
          className={`${styles.toolbarIcon} ${styles.smile}`}
        >
          <img src={smileIcon} alt="smile-icon" />
        </Link>
        <Link className={`${styles.toolbarIcon} ${styles.stress}`}>
          <img src={stressIcon} alt="stress-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Main;
