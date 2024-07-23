import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./WhyChooseEngageAI.module.css";

const WhyChooseEngageAI = ({
  className = "",
  whyShouldIChooseEngageAI,
  line2,
  propWidth,
  propGap,
  propAlignSelf,
}) => {
  const whyChooseEngageAIStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propGap, propAlignSelf]);

  return (
    <div
      className={[styles.whyChooseEngageAI, className].join(" ")}
      style={whyChooseEngageAIStyle}
    >
      <div className={styles.whyChooseEngageAITitle}>
        <div className={styles.whyShouldIChooseEngageaiWrapper}>
          <h1 className={styles.whyShouldI}>{whyShouldIChooseEngageAI}</h1>
        </div>
        <img
          className={styles.iconPlus}
          loading="lazy"
          alt=""
          src="/-icon-plus.svg"
        />
      </div>
      <img
        className={styles.whyChooseEngageAIChild}
        loading="lazy"
        alt=""
        src={line2}
      />
    </div>
  );
};

WhyChooseEngageAI.propTypes = {
  className: PropTypes.string,
  whyShouldIChooseEngageAI: PropTypes.string,
  line2: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default WhyChooseEngageAI;
