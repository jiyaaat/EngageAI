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
      <div class="input-group mb-3 input-group-lg">
                        <select class="form-select" id="inputGroupSelect01">
                          <option selected>Choose...</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                          
                        </select>
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
