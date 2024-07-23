import PropTypes from "prop-types";
import styles from "./DropdownOptions.module.css";

const DropdownOptions = ({ className = "", noVacancies, select }) => {
  return (
    <div className={[styles.dropdownOptions, className].join(" ")}>
      <div className={styles.dropdownItem}>
        <div className={styles.dropdownValue}>*</div>
      </div>
      <div className={styles.dropdown}>
        <img
          className={styles.rectangleIcon}
          loading="lazy"
          alt=""
          src="/rectangle-1.svg"
        />
        <img className={styles.icondropdown} alt="" src="/icondropdown.svg" />
        <div className={styles.noVacancies}>{noVacancies}</div>
        <div className={styles.select}>{select}</div>
      </div>
    </div>
  );
};

DropdownOptions.propTypes = {
  className: PropTypes.string,
  noVacancies: PropTypes.string,
  select: PropTypes.string,
};

export default DropdownOptions;
