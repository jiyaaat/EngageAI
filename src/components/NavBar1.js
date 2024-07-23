import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./NavBar1.module.css";

const NavBar1 = ({ className = "" }) => {
  return (
    <header className={[styles.navBar, className].join(" ")}>
      <div className={styles.navBarInner}>
        <div className={styles.clothingAndAccessoriesParent}>
          <a className={styles.clothingAndAccessories}>
            Clothing and Accessories
          </a>
          <div className={styles.engageaiWrapper}>
            <a className={styles.engageai}>EngageAI</a>
          </div>
        </div>
      </div>
      <nav className={styles.navBarInfoWrapper}>
        <nav className={styles.navBarInfo}>
          <a className={styles.home}>Home</a>
          <a className={styles.aboutUs}>Features</a>
          <a className={styles.blog}>Benefits</a>
          <a className={styles.services}>Services</a>
        </nav>
      </nav>
      <Button
        className={styles.button}
        endIcon={
          <img
            width="20px"
            height="20px"
            src="/icon--left-arrow--24--outline.svg"
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
          width: 157,
          height: 44,
        }}
      >
        Contact us
      </Button>
    </header>
  );
};

NavBar1.propTypes = {
  className: PropTypes.string,
};

export default NavBar1;
