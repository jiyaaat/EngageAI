import { useCallback } from "react";
import { Button } from "@mui/material";
import NavBar1 from "../components/NavBar1";
import CheckboxRow from "../components/CheckboxRow";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className={styles.desktop3}>
      <NavBar1 />
      <section className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.contentLeftInner}>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-14.svg"
              />
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.lineDiv} />
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.frameGroup}>
              <div className={styles.basicInfoHeaderWrapper}>
                <div className={styles.basicInfoHeader}>
                  <div
                    className={styles.basicInformation}
                  >{`Basic Information & Preferences`}</div>
                  <a className={styles.shoppingBehaviour}>Shopping Behaviour</a>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.nameInputParentParent}>
                    <div className={styles.nameInputParent}>
                      <div className={styles.nameInputGrandparent}>
                        <div className={styles.nameInputGreatGrandparent}>
                          <div className={styles.name}>Name</div>
                          <div className={styles.nameInput}>
                            <div className={styles.div}>*</div>
                          </div>
                        </div>
                        <div className={styles.displayName}>
                          <h2 className={styles.hayesAmber}>Hayes Amber</h2>
                        </div>
                        <div className={styles.location}>Location</div>
                      </div>
                      <div className={styles.edit}>
                        <a className={styles.edit1}>Edit</a>
                      </div>
                    </div>
                    <div className={styles.group}>
                      <img
                        className={styles.groupChild}
                        alt=""
                        src="/rectangle-23.svg"
                      />
                      <div className={styles.locationIconParent}>
                        <div className={styles.locationIcon} />
                        <img
                          className={styles.mapPinIcon}
                          alt=""
                          src="/mappin.svg"
                        />
                      </div>
                      <div className={styles.thStreetSanFranciscoCaWrapper}>
                        <div className={styles.thStreetSan}>
                          165 11th Street, San Francisco, CA...
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.interestsHeaderParent}>
                    <div className={styles.interestsHeader}>
                      <div className={styles.interests}>INTERESTS</div>
                      <div className={styles.interestsHeaderItems}>*</div>
                    </div>
                    <div className={styles.whatTypesOfProductsAreYouWrapper}>
                      <div className={styles.whatTypesOf}>
                        What types of products are you interested in?
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.checkboxRowParent}>
                      <CheckboxRow
                        openDesks="Clothing and Accessories"
                        sharedOffices="Stationary Items"
                      />
                      <CheckboxRow
                        openDesks="Electronics"
                        sharedOffices="Books"
                        propFlex="unset"
                        propMinWidth="unset"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cityDropdownParentWrapper}>
                <div className={styles.cityDropdownParent}>
                  <div className={styles.inputWrapper}>
                    <div className={styles.input}>
                      <img
                        className={styles.rectangleIcon}
                        loading="lazy"
                        alt=""
                        src="/rectangle.svg"
                      />
                      <div className={styles.cityName}>
                        Enter your Interests
                      </div>
                      <div className={styles.label}>
                        <span>{`Other Interests `}</span>
                        <i>(please specify)</i>
                        <span>{` `}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cityDropdownValue}>
                    <div className={styles.div1}>*</div>
                  </div>
                  <div className={styles.vacancyDropdownParentWrapper}>
                    <div className={styles.vacancyDropdownParent}>
                      <div className={styles.dropdown}>
                        <img
                          className={styles.rectangleIcon1}
                          alt=""
                          src="/rectangle-1.svg"
                        />
                        <div className={styles.noVacanciesWrapper}>
                          <div className={styles.noVacancies}>
                            Choose your Gender
                          </div>
                        </div>
                        <img
                          className={styles.icondropdown}
                          alt=""
                          src="/icondropdown.svg"
                        />
                        <div className={styles.select}>GENDER</div>
                      </div>
                      <div className={styles.vacancyDropdownInput}>
                        <div className={styles.div2}>*</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dropdown1}>
                    <img
                      className={styles.rectangleIcon2}
                      alt=""
                      src="/rectangle-1.svg"
                    />
                    <img
                      className={styles.icondropdown1}
                      alt=""
                      src="/icondropdown.svg"
                    />
                    <div className={styles.noVacancies1}>
                      Enter your Hobbies
                    </div>
                    <div className={styles.select1}>HOBBIES OR INTERESTS</div>
                  </div>
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
            <div className={styles.contactPreferencesParentParent}>
              <div className={styles.contactPreferencesParent}>
                <div className={styles.contactPreferencesParentInner}>
                  <div className={styles.placeholderParent}>
                    <div className={styles.placeholder}>
                      <div className={styles.contactPreferencesTitle}>
                        <div className={styles.placeholder1}>*</div>
                      </div>
                      <a className={styles.contactPreferences}>
                        Contact Preferences
                      </a>
                    </div>
                    <div className={styles.additionalInformation}>
                      Additional Information
                    </div>
                  </div>
                </div>
                <div className={styles.dropdown2}>
                  <img
                    className={styles.rectangleIcon3}
                    alt=""
                    src="/rectangle-1.svg"
                  />
                  <img
                    className={styles.icondropdown2}
                    alt=""
                    src="/icondropdown.svg"
                  />
                  <div className={styles.noVacancies2}>Enter your age</div>
                  <div className={styles.select2}>AGE</div>
                </div>
              </div>
              <div className={styles.doubleCheckboxWrapper}>
                <div className={styles.doubleCheckbox}>
                  <div className={styles.privateDesksCheckboxes}>
                    <div className={styles.checkbox}>
                      <input className={styles.checkbox1} type="checkbox" />
                      <div className={styles.privateDeskLabels}>
                        <div className={styles.privateDesks}>
                          Home and Kitchen
                        </div>
                      </div>
                    </div>
                    <div className={styles.checkbox2}>
                      <input className={styles.checkbox3} type="checkbox" />
                      <div className={styles.privateDesksWrapper}>
                        <div className={styles.privateDesks1}>
                          Home and Kitchen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.additionalCheckboxes}>
                    <div className={styles.checkbox4}>
                      <input className={styles.checkbox5} type="checkbox" />
                      <div className={styles.firstAdditionalLabel}>
                        <div className={styles.privateDesks2}>
                          Beauty and Personal Care
                        </div>
                      </div>
                    </div>
                    <div className={styles.secondAdditionalCheckbox}>
                      <div className={styles.checkbox6}>
                        <input className={styles.checkbox7} type="checkbox" />
                        <div className={styles.secondAdditionalLabel}>
                          <div className={styles.privateDesks3}>
                            Toys and Games
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop1;
