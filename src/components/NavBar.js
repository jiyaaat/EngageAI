import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

const NavBar = ({
  className = "",
  onAboutUsTextClick,
  onServicesTextClick,
}) => {
  const navigate = useNavigate();

  const onAboutUsTextClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='oURSERVICESText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick1 = useCallback(() => {
    navigate("/desktop-12");
  }, [navigate]);

  return (
    <header className={[styles.navBar, className].join(" ")}>
      <div className={styles.engageAILogo}>
        <a className={styles.engageai}>EngageAI</a>
      </div>
      <nav className={styles.navbarInfo}>
        <nav className={styles.navBarInfo}>
          <a className={styles.home}>Home</a>
          <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
            Features
          </a>
          <a className={styles.blog}>Benefits</a>
          <a className={styles.services} onClick={onServicesTextClick}>
            Services
          </a>
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

NavBar.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onAboutUsTextClick: PropTypes.func,
  onServicesTextClick: PropTypes.func,
};

export default NavBar;
