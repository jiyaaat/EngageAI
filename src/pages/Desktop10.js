import { useCallback } from "react";
import { Button } from "@mui/material";
import NavBar1 from "../components/NavBar1";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop10.module.css";

const Desktop10 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/desktop-12");
  }, [navigate]);

  return (
    <div className={styles.desktop10}>
      <div className={styles.desktop10Child} />
      <NavBar1 />
      <section className={styles.content}>
        <div className={styles.frameParent}>
          <div className={styles.productDetailsParent}>
            <div className={styles.productDetails}>
              <div className={styles.productImages}>
                <div className={styles.imageContainer}>
                  <div className={styles.productImage} />
                  <div className={styles.imageContainerInner}>
                    <div className={styles.frameChild} />
                  </div>
                </div>
                <div className={styles.productImagesInner}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.imageTwo} />
              </div>
            </div>
            <div className={styles.productForm}>
              <div className={styles.formContainer}>
                <div className={styles.formFields}>
                  <div className={styles.fieldContainer}>
                    <div className={styles.productInfo}>
                      <div className={styles.productInformation}>
                        Product Information
                      </div>
                    </div>
                    <div className={styles.recommendationQuestionParent}>
                      <div className={styles.recommendationQuestion}>
                        <div className={styles.wouldYouReccomend}>
                          Would you reccomend this product?
                        </div>
                      </div>
                      <div className={styles.checkboxContainerWrapper}>
                        <div className={styles.checkboxContainer}>
                          <div className={styles.checkbox}>
                            <input
                              className={styles.checkbox1}
                              type="checkbox"
                            />
                            <div className={styles.privateLabel}>
                              <div className={styles.privateDesks}>Yes</div>
                            </div>
                          </div>
                          <div className={styles.checkbox2}>
                            <input
                              className={styles.groupInput}
                              type="checkbox"
                            />
                            <div className={styles.openLabel}>
                              <div className={styles.openDesks}>No</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.ratingQuestionWrapper}>
                        <div className={styles.ratingQuestion}>
                          <div className={styles.overallRatingOf}>
                            Overall Rating of product:
                          </div>
                          <div className={styles.starRating}>
                            <div className={styles.starContainer}>
                              <img
                                className={styles.starsIcon}
                                loading="lazy"
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className={styles.starsIcon1}
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className={styles.starsIcon2}
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className={styles.starsIcon3}
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className={styles.vectorIcon}
                                alt=""
                                src="/vector-4.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.additionalComments}>
                        Additional Comments:
                      </div>
                    </div>
                  </div>
                  <div className={styles.feedback}>FeedBack</div>
                </div>
                <div className={styles.additionalInformation}>
                  Additional Information
                </div>
              </div>
              <div className={styles.dropdown}>
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle1.svg"
                />
                <img
                  className={styles.icondropdown}
                  alt=""
                  src="/icondropdown.svg"
                />
                <div className={styles.noVacancies} />
                <div className={styles.select} />
              </div>
            </div>
          </div>
          <div className={styles.updateButtonContainer}>
            <Button
              className={styles.updateButtonContainerChild}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#4751e9",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#4751e9" },
              }}
              onClick={onGroupButtonClick}
            >
              Submit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop10;
