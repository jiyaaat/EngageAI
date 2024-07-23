import SmartChatbotsCard from "./SmartChatbotsCard";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h2 className={styles.ourServices} data-scroll-to="oURSERVICESText">
          OUR SERVICES
        </h2>
        <div className={styles.serviceCards}>
          <SmartChatbotsCard
            iconChat="/-icon-chat.svg"
            smartChatbots="Smart Chatbots"
          />
          <SmartChatbotsCard
            iconChat="/-icon-bar-chart.svg"
            smartChatbots="Feedback Insights"
            propWidth="330px"
            propPadding="0px 30px 0px 0px"
          />
          <div className={styles.serviceCardFirstRow}>
            <div className={styles.iconCogWrapper}>
              <img
                className={styles.iconCog}
                loading="lazy"
                alt=""
                src="/-icon-cog.svg"
              />
            </div>
            <div className={styles.userTrendsParent}>
              <h1 className={styles.userTrends}>User Trends</h1>
              <div className={styles.loremIpsumDolorSitAmetCoParent}>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. `}</div>
                <div className={styles.exploreParent}>
                  <div className={styles.explore}>Explore</div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
