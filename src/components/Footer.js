import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerNavigation}>
          <div className={styles.footerLinks}>
            <div className={styles.primaryLinks}>
              <h2 className={styles.home}>Home</h2>
              <h2 className={styles.features}>Features</h2>
              <h2 className={styles.benefits}>Benefits</h2>
              <h2 className={styles.services}>Services</h2>
            </div>
            <div className={styles.secondaryLinks}>
              <h2 className={styles.contactUs}>Contact Us</h2>
              <h2 className={styles.faqs}>Faqs</h2>
              <h2 className={styles.helpCenter}>Help Center</h2>
            </div>
          </div>
        </div>
        <h1 className={styles.engageai}>EngageAI</h1>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.social}>
          <div className={styles.socialIcons}>
            <h2 className={styles.socialLinks}>Social Links:</h2>
            <div className={styles.socialNetwork}>
              <img className={styles.socialIcon} alt="" src="/vector-6.svg" />
              <img className={styles.socialIcon1} alt="" src="/vector-7.svg" />
            </div>
          </div>
          <div className={styles.logo}>
            <img className={styles.logoImageIcon} alt="" src="/vector-8.svg" />
          </div>
          <div className={styles.copyrightContentWrapper}>
            <div className={styles.copyrightContent}>
              <div className={styles.copyrightInfo}>
                <img
                  className={styles.copyrightSymbolIcon}
                  alt=""
                  src="/vector-9.svg"
                />
                <img
                  className={styles.rightsReservedIcon}
                  alt=""
                  src="/vector-10.svg"
                />
                <img
                  className={styles.allRightsIcon}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.legal}>
                <h3 className={styles.copyright2024AllRights}>
                  Copyright@2024 All rights reserved
                </h3>
                <div className={styles.legalLinks}>
                  <div className={styles.termsLink}>
                    <h3 className={styles.terms}>Terms</h3>
                  </div>
                  <h3 className={styles.privacy}>Privacy</h3>
                  <h3 className={styles.compilances}>Compilances</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
