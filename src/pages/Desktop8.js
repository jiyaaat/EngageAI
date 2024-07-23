import { useCallback } from "react";
import { Button } from "@mui/material";
import NavBar1 from "../components/NavBar1";
import DropdownOptions from "../components/DropdownOptions";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop8.module.css";

const Desktop8 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  return (
    <div className={styles.desktop8}>
      <div className={styles.desktop8Child} />
      <NavBar1 />
      <section className={styles.content}>
        <div className={styles.frameParent}>
          <div className={styles.innerContentWrapper}>
            <div className={styles.innerContent}>
              <div className={styles.elementContainer}>
                <div className={styles.elementRow}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.lineWrapper}>
                      <div className={styles.frameItem} />
                    </div>
                  </div>
                  <div className={styles.elementRowInner}>
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.elementRowChild} />
                </div>
              </div>
              <div className={styles.information}>
                <div className={styles.productInformation}>
                  Product Information
                </div>
                <div className={styles.feedBackContainer}>
                  <div className={styles.feedback}>FeedBack</div>
                </div>
                <div className={styles.additionalInformation}>
                  Additional Information
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.nameParent}>
              <div className={styles.name}>Name</div>
              <div className={styles.nameInputContainer}>
                <div className={styles.nameInput}>*</div>
              </div>
              <div className={styles.namePlaceholder}>*</div>
            </div>
            <div className={styles.dropdownContainerParent}>
              <div className={styles.dropdownContainer}>
                <div className={styles.hayesAmberParent}>
                  <h2 className={styles.hayesAmber}>Hayes Amber</h2>
                  <div className={styles.editWrapper}>
                    <a className={styles.edit}>Edit</a>
                  </div>
                </div>
                <div className={styles.dropdownOptionsParent}>
                  <DropdownOptions
                    noVacancies="Enter your product name"
                    select="PRODUCT NAME"
                  />
                  <DropdownOptions
                    noVacancies="Enter your date of purchase"
                    select="DATE OF PURCHASE"
                  />
                  <DropdownOptions
                    noVacancies="Enter your product category"
                    select="PRODUCT CATEGORY"
                  />
                </div>
              </div>
              <div className={styles.instanceDropdown}>
                <div className={styles.dropdown}>
                  <img
                    className={styles.rectangleIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-1.svg"
                  />
                  <img
                    className={styles.icondropdown}
                    alt=""
                    src="/icondropdown.svg"
                  />
                  <div className={styles.noVacancies}>Enter your email</div>
                  <a className={styles.select}>EMAIL</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
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
        </div>
      </section>
    </div>
  );
};

export default Desktop8;
