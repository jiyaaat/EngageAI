import { useCallback } from "react";
import { Button } from "@mui/material";
import NavBar1 from "../components/NavBar1";
import OverallSatisfactionLabel from "../components/OverallSatisfactionLabel";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop9.module.css";

const Desktop9 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/desktop-10");
  }, [navigate]);

  return (
    <div className={styles.desktop9}>
      <div className={styles.desktop9Child} />
      <NavBar1 />
      <section className={styles.productInfoContainerWrapper}>
        <div className={styles.productInfoContainer}>
          <div className={styles.productOptions}>
            <div className={styles.productOptionsInner}>
              <div className={styles.frameParent}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameItem} />
                  </div>
                </div>
                <div className={styles.lineContainer}>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.ellipseDiv} />
              </div>
            </div>
            <div className={styles.productInformationLabelParent}>
              <div className={styles.productInformationLabel}>
                <div className={styles.productInformation}>
                  Product Information
                </div>
                <div className={styles.satisfactionOptions}>
                  <div className={styles.overallSatisfactionOptions}>
                    <OverallSatisfactionLabel overallSatisfaction="Overall satisfaction?" />
                    <div className={styles.productQualityOptions}>
                      <div className={styles.productQualityLabel}>
                        <div className={styles.productQuality}>
                          Product Quality?
                        </div>
                      </div>
                      <div className={styles.productQualityCheckboxes}>
                        <div className={styles.productQualityCheckboxRow}>
                          <div className={styles.checkbox}>
                            <input
                              className={styles.groupInput}
                              type="checkbox"
                            />
                            <div className={styles.openDesksWrapper}>
                              <div className={styles.openDesks}>Excellent</div>
                            </div>
                          </div>
                          <div className={styles.checkbox1}>
                            <input
                              className={styles.checkbox2}
                              type="checkbox"
                            />
                            <div className={styles.privateDesksWrapper}>
                              <div className={styles.privateDesks}>Good</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.easeOfUseOptions}>
                          <div className={styles.easeOfUse}>Ease Of Use?</div>
                        </div>
                      </div>
                      <div className={styles.easeOfUseCheckboxes}>
                        <div className={styles.easeOfUseCheckboxRow}>
                          <div className={styles.checkbox3}>
                            <input
                              className={styles.groupInput1}
                              type="checkbox"
                            />
                            <div className={styles.openDesksContainer}>
                              <div className={styles.openDesks1}>Excellent</div>
                            </div>
                          </div>
                          <div className={styles.checkbox4}>
                            <input
                              className={styles.checkbox5}
                              type="checkbox"
                            />
                            <div className={styles.privateDesksContainer}>
                              <div className={styles.privateDesks1}>Good</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.valueForMoneyOptions}>
                      <OverallSatisfactionLabel
                        overallSatisfaction="Value For Money?"
                        propAlignSelf="unset"
                        propFlex="1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.additionalOptions}>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox6}>
                    <input className={styles.checkbox7} type="checkbox" />
                    <div className={styles.privateDesksFrame}>
                      <div className={styles.privateDesks2}>Average</div>
                    </div>
                  </div>
                  <div className={styles.checkboxGroup}>
                    <div className={styles.checkbox8}>
                      <input className={styles.checkbox9} type="checkbox" />
                      <div className={styles.frameDiv}>
                        <div className={styles.privateDesks3}>Average</div>
                      </div>
                    </div>
                    <div className={styles.checkboxWrapper}>
                      <div className={styles.checkbox10}>
                        <input className={styles.checkbox11} type="checkbox" />
                        <div className={styles.privateDesksWrapper1}>
                          <div className={styles.privateDesks4}>Average</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.feedbackCheckbox}>
                      <div className={styles.checkbox12}>
                        <input className={styles.checkbox13} type="checkbox" />
                        <div className={styles.privateDesksWrapper2}>
                          <div className={styles.privateDesks5}>Average</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.feedbackTitleParent}>
                  <div className={styles.feedbackTitle}>
                    <div className={styles.feedback}>FeedBack</div>
                  </div>
                  <div className={styles.feedbackOptions}>
                    <div className={styles.checkbox14}>
                      <input className={styles.groupInput2} type="checkbox" />
                      <div className={styles.privateOfficesWrapper}>
                        <div className={styles.privateOffices}>Poor</div>
                      </div>
                    </div>
                    <div className={styles.officesCheckboxB}>
                      <div className={styles.checkbox15}>
                        <input className={styles.groupInput3} type="checkbox" />
                        <div className={styles.privateOfficesContainer}>
                          <div className={styles.privateOffices1}>Poor</div>
                        </div>
                      </div>
                      <div className={styles.officesCheckboxC}>
                        <div className={styles.checkbox16}>
                          <input
                            className={styles.groupInput4}
                            type="checkbox"
                          />
                          <div className={styles.privateOfficesFrame}>
                            <div className={styles.privateOffices2}>Poor</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.officesCheckboxD}>
                        <div className={styles.checkbox17}>
                          <input
                            className={styles.groupInput5}
                            type="checkbox"
                          />
                          <div className={styles.privateOfficesWrapper1}>
                            <div className={styles.privateOffices3}>Poor</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.additionalInformationTitleParent}>
                <div className={styles.additionalInformationTitle}>
                  <div className={styles.additionalInformation}>
                    Additional Information
                  </div>
                </div>
                <div className={styles.additionalInformationOptions}>
                  <div className={styles.checkbox18}>
                    <input className={styles.groupInput6} type="checkbox" />
                    <div className={styles.privateOfficesWrapper2}>
                      <div className={styles.privateOffices4}>Very Poor</div>
                    </div>
                  </div>
                  <div className={styles.officesCheckboxF}>
                    <div className={styles.checkbox19}>
                      <input className={styles.groupInput7} type="checkbox" />
                      <div className={styles.privateOfficesWrapper3}>
                        <div className={styles.privateOffices5}>Very Poor</div>
                      </div>
                    </div>
                    <div className={styles.officesCheckboxG}>
                      <div className={styles.checkbox20}>
                        <input className={styles.groupInput8} type="checkbox" />
                        <div className={styles.privateOfficesWrapper4}>
                          <div className={styles.privateOffices6}>
                            Very Poor
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.officesCheckboxH}>
                      <div className={styles.checkbox21}>
                        <input className={styles.groupInput9} type="checkbox" />
                        <div className={styles.privateOfficesWrapper5}>
                          <div className={styles.privateOffices7}>
                            Very Poor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.updateButtonWrapper}>
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

export default Desktop9;
