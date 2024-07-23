import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHeroSectionClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <h1 className={styles.seamlessInteractionUltimateContainer}>
        <span className={styles.seamlessInteractionUltimateContainer1}>
          <span
            className={styles.seamlessInteractionUltimate}
          >{`Seamless Interaction, Ultimate Satisfaction with `}</span>
          <span className={styles.engageai}>EngageAI</span>
          <span className={styles.span}>{` `}</span>
        </span>
      </h1>
      <div className={styles.heroSectionWrapper}>
        <Button
          className={styles.heroSection}
          endIcon={
            <img
              width="20px"
              height="20px"
              src="/icon--left-arrow--24--outline-1.svg"
            />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#f6f5f5",
            fontSize: "16",
            background: "#4751e9",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#4751e9" },
            width: 178,
          }}
          onClick={onHeroSectionClick}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
