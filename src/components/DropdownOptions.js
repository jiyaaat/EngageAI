import PropTypes from "prop-types";
import styles from "./DropdownOptions.module.css";

const DropdownOptions = ({ className = "", noVacancies, select }) => {
  return (
    <div className={[styles.dropdownOptions, className].join(" ")}>
      <div className={styles.dropdownItem}>
        <div className={styles.dropdownValue}>*</div>
      </div>
      <div className={styles.dropdown}>
      <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                  </div>
       
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
