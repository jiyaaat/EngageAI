import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SmartChatbotsCard.module.css";

const SmartChatbotsCard = ({
  className = "",
  iconChat,
  smartChatbots,
  propWidth,
  propPadding,
}) => {
  const smartChatbotsCardStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={[styles.smartChatbotsCard, className].join(" ")}
      style={smartChatbotsCardStyle}
    >
      <div className={styles.smartChatbotsIcon}>
        <img className={styles.iconChat} loading="lazy" alt="" src={iconChat} />
      </div>
      <div className={styles.smartChatbotsContent}>
        <h1 className={styles.smartChatbots}>{smartChatbots}</h1>
        <div className={styles.smartChatbotsDescription}>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. `}</div>
          <div className={styles.smartChatbotsButton}>
            <div className={styles.explore}>Explore</div>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SmartChatbotsCard.propTypes = {
  className: PropTypes.string,
  iconChat: PropTypes.string,
  smartChatbots: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default SmartChatbotsCard;
