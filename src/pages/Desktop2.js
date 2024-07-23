import { useCallback } from "react";
import { Button } from "@mui/material";
import NavBar1 from "../components/NavBar1";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import DropdownTitles from "../components/DropdownTitles";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop2.module.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className={styles.desktop4}>
      <NavBar1 />
      <section className={styles.content}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-141.svg"
              />
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.apsAConcepoDoProjetoEm} />
            </div>
          </div>
          <div className={styles.dropdownContainerParent}>
            <form className={styles.dropdownContainer}>
              <FrameComponent4 />
              <div className={styles.influenceQuestion}>
                <div className={styles.whatFactorsInfluenceContainer}>
                  <span
                    className={styles.whatFactorsInfluence}
                  >{`What factors influence your purchase decisions the most? `}</span>
                  <i className={styles.selectAllThat}>
                    (Select all that apply)
                  </i>
                </div>
              </div>
              <FrameComponent3 />
              <DropdownTitles
                whatIsYourAverageSpending="What is your average spending on online shopping per month?"
                noVacancies="Less than ₹500"
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
              <div className={styles.buttonContainer}>
                <div className={styles.updateButtons}>
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
            <div className={styles.additionalInformation}>
              Additional Information
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop2;
