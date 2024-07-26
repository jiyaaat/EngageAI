import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

const NavBar = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const navigateToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const navigateToServices = useCallback(() => {
    navigate("/desktop-12");
  }, [navigate]);

  return (
    <header className={[styles.navBar, className].join(" ")}>
      <div className={styles.engageAILogo}>
        <a className={styles.engageai} onClick={navigateToHome}>EngageAI</a>
      </div>
      <nav className={styles.navbarInfo}>
        <nav className={styles.navBarInfo}>
          <a className={styles.home} onClick={navigateToHome}>Home</a>
          <a className={styles.aboutUs} onClick={navigateToHome}>Features</a>
          <a className={styles.blog} onClick={navigateToHome}>Benefits</a>
          <a className={styles.services} onClick={navigateToServices}>Services</a>
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
};

export default NavBar;
