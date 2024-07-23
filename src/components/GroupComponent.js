import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  helloThereImEngageAIYourP,
  propWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.heroBackgroundParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.heroBackground} />
      <h2 className={styles.helloThereIm}>{helloThereImEngageAIYourP}</h2>
      <img
        className={styles.heroSpacingIcon}
        loading="lazy"
        alt=""
        src="/frame-18.svg"
      />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  helloThereImEngageAIYourP: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default GroupComponent;
