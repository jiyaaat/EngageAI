import NavBar from "../components/NavBar";
import Content1 from "../components/Content1";
import Confirmation from "../components/Confirmation";
import styles from "./Desktop11.module.css";

const Desktop11 = () => {
  return (
    <div className={styles.desktop2}>
      <NavBar />
      <Content1 />
      <Confirmation yesplease="Yes, I want i5 " />
    </div>
  );
};

export default Desktop11;
