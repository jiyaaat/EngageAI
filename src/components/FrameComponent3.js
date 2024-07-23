import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.checkboxContainerWrapper, className].join(" ")}>
      <div className={styles.checkboxContainer}>
        <div className={styles.checkboxOptions}>
          <div className={styles.checkbox}>
            <input className={styles.groupInput} type="checkbox" />
            <div className={styles.deskLabel}>
              <div className={styles.openDesks}>Price</div>
            </div>
          </div>
          <div className={styles.checkbox1}>
            <input className={styles.checkbox2} type="checkbox" />
            <div className={styles.officesLabel}>
              <div className={styles.sharedOffices}>Quality</div>
            </div>
          </div>
        </div>
        <div className={styles.privateDesks}>
          <div className={styles.desksContainer}>
            <div className={styles.deskOption}>
              <div className={styles.checkbox3}>
                <input className={styles.checkbox4} type="checkbox" />
                <div className={styles.deskName}>
                  <div className={styles.privateDesks1}>Brand</div>
                </div>
              </div>
            </div>
            <div className={styles.checkbox5}>
              <input className={styles.groupInput1} type="checkbox" />
              <div className={styles.officeLabel}>
                <div className={styles.privateOffices}>Reviews and Ratings</div>
              </div>
            </div>
          </div>
          <div className={styles.checkbox6}>
            <input className={styles.checkbox7} type="checkbox" />
            <div className={styles.deskName1}>
              <div className={styles.privateDesks2}>Recommendations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
