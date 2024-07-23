import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({
  className = "",
  doYouLikeToReceiveNotific,
  noVacancies,
  propAlignSelf,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameWrapper}>
        <div className={styles.doYouLikeToReceiveNotificParent}>
          <div className={styles.doYouLike}>{doYouLikeToReceiveNotific}</div>
          <div className={styles.placeholderWrapper}>
            <div className={styles.placeholder}>*</div>
          </div>
        </div>
      </div>
      <div className={styles.dropdown}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-1.svg" />
        <div className={styles.dropdownOption}>
          <div className={styles.noVacancies}>{noVacancies}</div>
        </div>
        <img className={styles.icondropdown} alt="" src="/icondropdown.svg" />
        <div className={styles.select}>GENDER</div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  doYouLikeToReceiveNotific: PropTypes.string,
  noVacancies: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent7;
