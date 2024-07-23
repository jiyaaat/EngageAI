import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./Content1.module.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.leftContent}>
        <div className={styles.imageContainer}>
          <GroupComponent
            helloThereImEngageAIYourP="Hello there! I’m Engage AI, your personalized assistant. How can I assist you today?"
            propWidth="523px"
          />
          <div className={styles.lowerImageBlock}>
            <div className={styles.lowerImageBlockInner}>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
        <GroupComponent
          helloThereImEngageAIYourP="Great! Do you have any specific requirements or preferences for your new laptop, like brand, budget, or features?"
          propWidth="587.1px"
        />
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
