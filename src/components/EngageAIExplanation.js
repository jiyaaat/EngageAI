import WhyChooseEngageAI from "./WhyChooseEngageAI";
import PropTypes from "prop-types";
import styles from "./EngageAIExplanation.module.css";

const EngageAIExplanation = ({ className = "" }) => {
  return (
    <section className={[styles.engageAIExplanation, className].join(" ")}>
      <div className={styles.engageAIExplanationTitle}>
        <h1 className={styles.whatIsEngageai}>What is EngageAI?</h1>
        <div className={styles.engageAIExplanationTitleInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/line-3.svg"
          />
        </div>
      </div>
      <WhyChooseEngageAI
        whyShouldIChooseEngageAI="Why should i choose EngageAI?"
        line2="/line-2.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.answersToYourFaqsWrapper}>
          <h1 className={styles.answersToYourContainer}>
            <p className={styles.answersToYour}>Answers to your</p>
            <p className={styles.faqs}>FAQS</p>
          </h1>
        </div>
        <div className={styles.fAQList}>
          <WhyChooseEngageAI
            whyShouldIChooseEngageAI="How does this work?"
            line2="/line-5.svg"
            propWidth="unset"
            propGap="10px"
            propAlignSelf="stretch"
          />
          <div className={styles.fAQItem}>
            <div className={styles.frameGroup}>
              <div className={styles.howToDeleteChatHistoryWrapper}>
                <h1 className={styles.howToDelete}>
                  How to delete chat history?
                </h1>
              </div>
              <img className={styles.vectorIcon} alt="" src="/-icon-plus.svg" />
            </div>
            <img
              className={styles.fAQItemChild}
              loading="lazy"
              alt=""
              src="/line-4.svg"
            />
          </div>
          <div className={styles.fAQItem1}>
            <div className={styles.frameContainer}>
              <div className={styles.howToTurnOffPersonalisatioWrapper}>
                <div className={styles.howToTurn}>
                  How to turn off personalisation?
                </div>
              </div>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/-icon-plus.svg"
              />
            </div>
            <img className={styles.fAQItemItem} alt="" src="/line-6.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

EngageAIExplanation.propTypes = {
  className: PropTypes.string,
};

export default EngageAIExplanation;
