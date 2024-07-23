import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.startWithEngageaiParent}>
        <h1 className={styles.startWithEngageaiContainer}>
          <span className={styles.startWithEngageaiContainer1}>
            <span className={styles.startWith}>{`Start With `}</span>
            <span className={styles.engageai}>EngageAI</span>
            <span className={styles.span}>{` `}</span>
          </span>
        </h1>
        <div className={styles.userPrompts}>
          <div className={styles.userPromptsContainer}>
            <div className={styles.userPromptsContent}>
              <div className={styles.userPromptSteps}>
                <div className={styles.userPromptStepOne}>
                  <h2 className={styles.step1}>Step 1</h2>
                </div>
                <h1 className={styles.startAChat}>
                  Start a chat by asking a question or stating a command
                </h1>
              </div>
              <div className={styles.examplePrompts}>
                <h2 className={styles.exampleUserPrompts}>
                  Example user prompts:
                </h2>
                <div className={styles.examplePromptsList}>
                  <div className={styles.examplePromptCards}>
                    <div className={styles.examplePromptCardOne}>
                      <div className={styles.examplePromptCardContentOn}>
                        <img
                          className={styles.iconLightbulb}
                          loading="lazy"
                          alt=""
                          src="/-icon-lightbulb.svg"
                        />
                        <div
                          className={styles.suggestSimilarProducts}
                        >{`suggest similar products `}</div>
                      </div>
                      <div className={styles.examplePromptCardContentTw}>
                        <div className={styles.examplePromptCardContentTh}>
                          <img
                            className={styles.iconAlternateExchange}
                            loading="lazy"
                            alt=""
                            src="/-icon-alternate-exchange.svg"
                          />
                          <div className={styles.returnPolicyContent}>
                            <div className={styles.whatIsReturn}>
                              What is return policy?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.examplePromptCardContentFo}>
                    <div className={styles.examplePromptCardContentFi}>
                      <img
                        className={styles.iconCommentDots}
                        loading="lazy"
                        alt=""
                        src="/-icon-comment-dots.svg"
                      />
                    </div>
                    <div className={styles.explainHowThis}>
                      explain how this app works
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.userPromptStepsTwo}>
                <div className={styles.userPromptStepTwo}>
                  <div className={styles.userPromptStepTwoNumber}>
                    <h2 className={styles.step2}>Step 2</h2>
                  </div>
                  <div className={styles.userPromptStepTwoDescripti}>
                    <h1 className={styles.sendTheCommand}>
                      Send the command or question to get answers
                    </h1>
                  </div>
                  <div className={styles.benefits}>
                    <div className={styles.benefitCards}>
                      <div className={styles.benefitCardOne}>
                        <div className={styles.benefitCardContentOne}>
                          <img
                            className={styles.iconCheckCircle}
                            loading="lazy"
                            alt=""
                            src="/-icon-check-circle.svg"
                          />
                          <h2 className={styles.enhancedCustomerSatisfaction}>
                            Enhanced customer satisfaction
                          </h2>
                        </div>
                        <div className={styles.benefitCardContentTwo}>
                          <img
                            className={styles.iconCheckCircle1}
                            alt=""
                            src="/-icon-check-circle.svg"
                          />
                          <div className={styles.dataDrivenContent}>
                            <h2 className={styles.dataDrivenDecisions}>
                              Data Driven Decisions
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className={styles.benefitCardContentThree}>
                        <img
                          className={styles.iconCheckCircle2}
                          alt=""
                          src="/-icon-check-circle.svg"
                        />
                        <h2 className={styles.scalability}>Scalability</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
