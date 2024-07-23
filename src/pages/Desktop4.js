import NavBar1 from "../components/NavBar1";
import LeftContent from "../components/LeftContent";
import styles from "./Desktop4.module.css";

const Desktop4 = () => {
  return (
    <div className={styles.desktop6}>
      <NavBar1 />
      <section className={styles.leftContentWrapper}>
        <LeftContent />
      </section>
    </div>
  );
};

export default Desktop4;
