import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Confirmation from "../components/Confirmation";
import styles from "./Desktop7.module.css";

const Desktop7 = () => {
  return (
    <div className={styles.desktop11}>
      <NavBar />
      <Content />
      <Confirmation yesplease="Yes,please" />
    </div>
  );
};

export default Desktop7;
