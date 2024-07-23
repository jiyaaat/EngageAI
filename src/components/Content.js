import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.leftContent}>
        <div className={styles.frameParent}>
          <GroupComponent helloThereImEngageAIYourP="Hello there! I’m Engage AI, your personalized assistant. How can I assist you today?" />
          <div className={styles.heroQuestion}>
            <div className={styles.questionBackgroundParent}>
              <div className={styles.questionBackground} />
              <h2 className={styles.canUFind}>
                Can u find the best laptops for me based on my preferences?
              </h2>
            </div>
          </div>
        </div>
        <GroupComponent
          helloThereImEngageAIYourP=" Based on your choices,You can purchase the HP Pavilion 15 directly from the HP website or through major retailers like Amazon, Best Buy, or Walmart. Would you like me to provide links to these options?"
          propWidth="587.1px"
        />
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
