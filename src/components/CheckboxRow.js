import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CheckboxRow.module.css";

const CheckboxRow = ({
  className = "",
  openDesks,
  sharedOffices,
  propFlex,
  propMinWidth,
}) => {
  const checkboxRowStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={[styles.checkboxRow, className].join(" ")}
      style={checkboxRowStyle}
    >
      <div className={styles.checkbox}>
        <input className={styles.groupInput} type="checkbox" />
        <div className={styles.openDesksWrapper}>
          <div className={styles.openDesks}>{openDesks}</div>
        </div>
      </div>
      <div className={styles.checkbox1}>
        <input className={styles.checkbox2} type="checkbox" />
        <div className={styles.sharedOfficesWrapper}>
          <div className={styles.sharedOffices}>{sharedOffices}</div>
        </div>
      </div>
    </div>
  );
};

CheckboxRow.propTypes = {
  className: PropTypes.string,
  openDesks: PropTypes.string,
  sharedOffices: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default CheckboxRow;
