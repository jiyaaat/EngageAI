import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({
  className = "",
  privateDesks,
  privateOffices,
  propGap,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.checkboxWrapper}>
        <div className={styles.checkbox}>
          <input className={styles.checkbox1} type="checkbox" />
          <div className={styles.privateDesksLabel}>
            <div className={styles.privateDesks}>{privateDesks}</div>
          </div>
        </div>
      </div>
      <div className={styles.checkbox2}>
        <input className={styles.groupInput} type="checkbox" />
        <div className={styles.privateOfficesLabel}>
          <div className={styles.privateOffices}>{privateOffices}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  privateDesks: PropTypes.string,
  privateOffices: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default FrameComponent5;
