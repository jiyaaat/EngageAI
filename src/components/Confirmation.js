import PropTypes from "prop-types";
import styles from "./Confirmation.module.css";

const Confirmation = ({ className = "", yesplease }) => {
  return (
    <section className={[styles.confirmation, className].join(" ")}>
      <footer className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-11.svg"
        />
        <h2 className={styles.yesplease}>{yesplease}</h2>
        <div className={styles.frameItem} />
      </footer>
    </section>
  );
};

Confirmation.propTypes = {
  className: PropTypes.string,
  yesplease: PropTypes.string,
};

export default Confirmation;
