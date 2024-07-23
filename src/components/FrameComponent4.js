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
            <div className={styles.dropdown}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-1.svg"
              />
              <div className={styles.vacancyContainer}>
                <div className={styles.noVacancies}>Monthly</div>
              </div>
              <img
                className={styles.icondropdown}
                alt=""
                src="/icondropdown.svg"
              />
              <div className={styles.select}>GENDER</div>
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
