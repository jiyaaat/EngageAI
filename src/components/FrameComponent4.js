import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.basicInfoParent, className].join(" ")}>
      <div className={styles.basicInfo}>
        <div className={styles.basicInfoTitle}>
          <div className={styles.infoTitle}>
            <div
              className={styles.basicInformation}
            >{`Basic Information & Preferences`}</div>
            <a className={styles.shoppingBehaviour}>Shopping Behaviour</a>
          </div>
        </div>
        <div className={styles.shoppingFrequency}>
          <div className={styles.frequencyQuestion}>
            <div className={styles.frequencyDropdownWrapper}>
              <div className={styles.frequencyDropdown}>
                <div className={styles.howOftenDo}>
                  How often do you shop online?
                </div>
                <div className={styles.div}>*</div>
              </div>
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
          <div className={styles.factorsParent}>
            <div className={styles.factors}>FACTORS</div>
            <div className={styles.div1}>*</div>
          </div>
        </div>
      </div>
      <a className={styles.contactPreferences}>Contact Preferences</a>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
