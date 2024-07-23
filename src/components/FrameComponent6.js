import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({
  className = "",
  openDesks,
  sharedOffices,
  propPadding,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.checkboxParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.checkbox}>
        <input className={styles.groupInput} type="checkbox" />
        <div className={styles.openDesksLabel}>
          <div className={styles.openDesks}>{openDesks}</div>
        </div>
      </div>
      <div className={styles.checkbox1}>
        <input className={styles.checkbox2} type="checkbox" />
        <div className={styles.sharedOfficesLabel}>
          <div className={styles.sharedOffices}>{sharedOffices}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  openDesks: PropTypes.string,
  sharedOffices: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FrameComponent6;
