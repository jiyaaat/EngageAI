import { useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import DropdownTitles from "./DropdownTitles";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SpendingDropdownParent.module.css";

const SpendingDropdownParent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className={[styles.spendingDropdownParent, className].join(" ")}>
      <form className={styles.shoppingBehaviorParentParent}>
        <div className={styles.shoppingBehaviorParent}>
          <FrameComponent4 />
          <div className={styles.purchaseDecisionsParent}>
            <div className={styles.whatFactorsInfluenceContainer}>
              <span
                className={styles.whatFactorsInfluence}
              >{`What factors influence your purchase decisions the most? `}</span>
              <i className={styles.selectAllThat}>(Select all that apply)</i>
            </div>
          </div>
        </div>
        <FrameComponent3 />
        <DropdownTitles
          whatIsYourAverageSpending="What is your average spending on online shopping per month?"
          noVacancies="Less than ₹500"
          propWidth="unset"
        />
        <DropdownTitles
          whatIsYourAverageSpending="Return Policy Preferences"
          noVacancies="Easy return within 7 days"
          propWidth="518px"
        />
        <DropdownTitles
          whatIsYourAverageSpending="Preferred Delivery Speed"
          noVacancies="Same Day Delivery"
          propWidth="518px"
        />
        <div className={styles.updatePropertyParent}>
          <div className={styles.buttonParent}>
            <Button
              className={styles.button}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#4751e9",
                borderRadius: "8px",
                "&:hover": { background: "#4751e9" },
                height: 48,
              }}
            >
              Update Details
            </Button>
            <Button
              className={styles.button1}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#747df6",
                borderRadius: "8px",
                "&:hover": { background: "#747df6" },
                width: 180,
                height: 48,
              }}
              onClick={onButtonClick}
            >
              Proceed
            </Button>
          </div>
        </div>
      </form>
      <div className={styles.wrapper}>
        <div className={styles.div}>*</div>
      </div>
      <div className={styles.additionalInformation}>Additional Information</div>
    </div>
  );
};

SpendingDropdownParent.propTypes = {
  className: PropTypes.string,
};

export default SpendingDropdownParent;
