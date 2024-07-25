import { useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./LeftContent.module.css";

const LeftContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  return (
    <div className={[styles.leftContent, className].join(" ")}>
      <div className={styles.leftContentInner}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-142.svg"
          />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.lineDiv} />
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.frameGroup}>
          <div className={styles.informationHeadersWrapper}>
            <div className={styles.informationHeaders}>
              <div
                className={styles.basicInformation}
              >{`Basic Information & Preferences`}</div>
              <a className={styles.shoppingBehaviour}>Shopping Behaviour</a>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <FrameComponent7
              doYouLikeToReceiveNotific="Do you like to receive notifications?"
              noVacancies="Yes"
            />
            <div className={styles.notificationsParent}>
              <div className={styles.notifications}>NOTIFICATIONS</div>
              <div className={styles.notificationsTitle}>*</div>
            </div>
          </div>
        </div>
        <div className={styles.contactPreferencesWrapper}>
          <a className={styles.contactPreferences}>Contact Preferences</a>
        </div>
        <div className={styles.additionalInformation}>
          Additional Information
        </div>
      </div>
      <div className={styles.leftContentChild}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.howWouldYouLikeToReceiveParent}>
              <div className={styles.howWouldYouContainer}>
                <span>{`How would you like to receive personalized recommendations and offers? `}</span>
                <i className={styles.selectAllThat}>(Select all that apply)</i>
              </div>
              <div className={styles.placeholderWrapper}>
                <div className={styles.placeholder}>*</div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <FrameComponent6 openDesks="E-Mail" sharedOffices="SMS" />
              <FrameComponent5
                privateDesks="In-App Messages"
                privateOffices="Push-up Notifications"
              />
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameWrapper}>
              <div className={styles.wouldYouLikeToSubscribeToParent}>
                <div className={styles.wouldYouLike}>
                  Would you like to subscribe to our newsletter for exclusive
                  deals and updates?
                </div>
                <div className={styles.placeholderContainer}>
                  <div className={styles.placeholder1}>*</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.dropdownParent}>
              <div class="input-group mb-3 input-group-lg">
                        <select class="form-select" id="inputGroupSelect01">
                          <option selected>Choose...</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                          
                        </select>
              </div>
                <div className={styles.frameParent5}>
                  <div className={styles.ifYesThenPleaseEnterYourWrapper}>
                    <div className={styles.ifYesThenContainer}>
                      <span>{`If yes, then please enter your E-Mail `}</span>
                      <i className={styles.elseEnterNa}>(else enter NA)</i>
                    </div>
                  </div>
                  <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                  </div>
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.preferredNotificationFrequenWrapper}>
                    <div className={styles.preferredNotificationFrequen}>
                      Preferred notification frequency
                    </div>
                  </div>
                  <div class="input-group mb-3 input-group-lg">
                        <select class="form-select" id="inputGroupSelect01">
                          <option selected>Choose...</option>
                          <option value="1">Weekly</option>
                          <option value="2">Monthly</option>
                          
                        </select>
              </div>
                </div>
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
              <div className={styles.inputWrapper}>
                <div className={styles.input}>*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LeftContent.propTypes = {
  className: PropTypes.string,
};

export default LeftContent;
