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
        <div class="input-group mb-3 input-group-lg">
                        <select class="form-select" id="inputGroupSelect01">
                          <option selected>Choose...</option>
                          <option value="1">Daily</option>
                          <option value="2">Weekly</option>
                          <option value="3">Monthly</option>
                        </select>
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
