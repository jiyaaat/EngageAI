import NavBar1 from "../components/NavBar1";
import SpendingDropdownParent from "../components/SpendingDropdownParent";
import styles from "./Desktop3.module.css";

const Desktop3 = () => {
  return (
    <div className={styles.desktop5}>
      <NavBar1 />
      <section className={styles.contentParent}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-141.svg"
              />
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.lineDiv} />
            </div>
          </div>
          <SpendingDropdownParent />
        </div>
      </section>
    </div>
  );
};

export default Desktop3;
