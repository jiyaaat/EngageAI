import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./DropdownTitles.module.css";

const DropdownTitles = ({
  className = "",
  whatIsYourAverageSpending,
  noVacancies,
  propWidth,
}) => {
  const dropdownTitlesStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.dropdownTitles, className].join(" ")}
      style={dropdownTitlesStyle}
    >
      <div className={styles.dropdownOptions}>
        <div className={styles.dropdownValues}>
          <div className={styles.whatIsYour}>{whatIsYourAverageSpending}</div>
        </div>
        <div className={styles.dropdown}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle-1.svg" />
          <div className={styles.dropdownVacancies}>
            <div className={styles.noVacancies}>{noVacancies}</div>
          </div>
          <img className={styles.icondropdown} alt="" src="/icondropdown.svg" />
          <div className={styles.select}>GENDER</div>
        </div>
      </div>
    </div>
  );
};

DropdownTitles.propTypes = {
  className: PropTypes.string,
  whatIsYourAverageSpending: PropTypes.string,
  noVacancies: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default DropdownTitles;
