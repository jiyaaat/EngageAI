import { useCallback } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop6.module.css";

const Desktop6 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/desktop-8");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/desktop-11");
  }, [navigate]);

  return (
    <div className={styles.desktop12}>
      <NavBar />
      <main className={styles.content}>
        <div className={styles.whichServiceWouldYouLikeTWrapper}>
          <h1 className={styles.whichServiceWould}>
            Which service would you like to use?
          </h1>
        </div>
        <section className={styles.serviceOptions}>
          <div
            className={styles.iconChatParent}
            onClick={onFrameContainerClick}
          >
            <img
              className={styles.iconChat}
              loading="lazy"
              alt=""
              src="/-icon-chat1.svg"
            />
            <h2 className={styles.smartChatbots}>Smart Chatbots</h2>
          </div>
          <div className={styles.frameParent} onClick={onFrameContainerClick1}>
            <div className={styles.iconBarChartWrapper}>
              <img
                className={styles.iconBarChart}
                loading="lazy"
                alt=""
                src="/-icon-bar-chart1.svg"
              />
            </div>
            <h2 className={styles.feedbackInsights}>Feedback Insights</h2>
          </div>
          <div className={styles.frameGroup} onClick={onFrameContainerClick2}>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
            </div>
            <h2 className={styles.recommendationsChatbot}>
              <p className={styles.recommendations}>Recommendations</p>
              <p className={styles.chatbot}>Chatbot</p>
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop6;
