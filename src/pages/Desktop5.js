import { useCallback } from "react";
import { Button } from "@mui/material";
import NavBar1 from "../components/NavBar1";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop5.module.css";

const Desktop5 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/desktop-12");
  }, [navigate]);

  return (
    <div className={styles.desktop7}>
      <NavBar1 />
      <section className={styles.desktop7Inner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-143.svg"
              />
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.lineDiv} />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.basicInformationPreferenceParent}>
                    <div
                      className={styles.basicInformation}
                    >{`Basic Information & Preferences`}</div>
                    <a className={styles.shoppingBehaviour}>
                      Shopping Behaviour
                    </a>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent3}>
                      <FrameComponent7
                        doYouLikeToReceiveNotific="Preferred Communication Language"
                        noVacancies="English"
                        propAlignSelf="unset"
                        propWidth="420px"
                      />
                      <div className={styles.frameParent4}>
                        <div className={styles.notificationsParent}>
                          <div className={styles.notifications}>
                            NOTIFICATIONS
                          </div>
                          <div className={styles.platformLabel}>*</div>
                        </div>
                        <div
                          className={styles.preferredShoppingPlatformsContainer}
                        >
                          <span>{`Preferred shopping platforms `}</span>
                          <i className={styles.selectAllThat}>
                            (Select all that apply)
                          </i>
                        </div>
                      </div>
                      <div className={styles.frameParent5}>
                        <FrameComponent6
                          openDesks="Amazon"
                          sharedOffices="Flipkart"
                          propPadding="0px 52px 0px 0px"
                        />
                        <FrameComponent5
                          privateDesks="eBay"
                          privateOffices="Walmart"
                          propGap="26px"
                        />
                        <FrameComponent5
                          privateDesks="Myntra"
                          privateOffices="Nyka"
                          propGap="30px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a className={styles.contactPreferences}>Contact Preferences</a>
                <div className={styles.checkboxWrapper}>
                  <div className={styles.checkbox}>
                    <input className={styles.checkbox1} type="checkbox" />
                    <div className={styles.sharedOfficesWrapper}>
                      <div className={styles.sharedOffices}>Meesho</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.wouldYouBeWillingToProvidParent}>
                        <div className={styles.wouldYouBe}>
                          Would you be willing to provide feedback on your
                          shopping experience?
                        </div>
                        <div
                          className={styles.feedbackQuestionPlaceholderWrapper}
                        >
                          <div className={styles.feedbackQuestionPlaceholder}>
                            *
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.dropdownParent}>
                      <div class="input-group mb-3 input-group-lg">
                        <select class="form-select" id="inputGroupSelect01">
                          <option selected>Choose...</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                          
                        </select>
                      </div>
                        <div className={styles.frameParent9}>
                          <div className={styles.ifYesHowWouldYouLikeToWrapper}>
                            <div className={styles.ifYesHowContainer}>
                              <span>{`If yes, how would you like to provide feedback? `}</span>
                              <i className={styles.elseEnterNa}>
                                (else enter NA)
                              </i>
                            </div>
                          </div>
                          <div className={styles.dropdownGroup}>
                          <div class="input-group mb-3 input-group-lg">
                          <select class="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                          
                          </select>
                          </div>
                            <img
                              className={styles.icondropdown2}
                              alt=""
                              src="/icondropdown.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.feedbackInputWrapper}>
                        <div className={styles.feedbackInput}>*</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.otherPreferencesWrapperParent}>
                    <div className={styles.otherPreferencesWrapper}>
                      <div className={styles.otherPreferencesInputWrappe}>
                        <div className={styles.anyOtherPreferencesContainer}>
                          <span>
                            Any other preferences or comments you'd like to
                            share?
                          </span>
                          <i className={styles.elseEnterNa1}>(else enter NA)</i>
                        </div>
                        <div className={styles.otherPreferencesInput}>
                          <div className={styles.otherPreferencesPlaceholder}>
                            *
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                  </div>
                  </div>
                  <Button
                    className={styles.groupButton}
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#4751e9",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { background: "#4751e9" },
                      width: 171,
                      height: 48,
                    }}
                    onClick={onGroupButtonClick}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.additionalInformationParent}>
              <div className={styles.additionalInformation}>
                Additional Information
              </div>
              <div className={styles.additionalInfoContent}>
                <div className={styles.additionalInfoPlaceholder}>*</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop5;
