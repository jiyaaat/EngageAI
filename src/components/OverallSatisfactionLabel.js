import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./OverallSatisfactionLabel.module.css";

const OverallSatisfactionLabel = ({
  className = "",
  overallSatisfaction,
  propAlignSelf,
  propFlex,
}) => {
  const overallSatisfactionLabelStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.overallSatisfactionLabel, className].join(" ")}
      style={overallSatisfactionLabelStyle}
    >
      <div className={styles.overallSatisfaction}>
        <div className={styles.overallSatisfaction1}>{overallSatisfaction}</div>
      </div>
      <div className={styles.overallSatisfactionCheckboxe}>
        <div className={styles.checkbox}>
          <input className={styles.groupInput} type="checkbox" />
          <div className={styles.openDesksLabel}>
            <div className={styles.openDesks}>Excellent</div>
          </div>
        </div>
        <div className={styles.checkbox1}>
          <input className={styles.checkbox2} type="checkbox" />
          <div className={styles.privateDesksLabel}>
            <div className={styles.privateDesks}>Good</div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverallSatisfactionLabel.propTypes = {
  className: PropTypes.string,
  overallSatisfaction: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default OverallSatisfactionLabel;
