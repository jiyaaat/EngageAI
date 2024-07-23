import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import EngageAIExplanation from "../components/EngageAIExplanation";
import Footer from "../components/Footer";
import styles from "./Desktop.module.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='oURSERVICESText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    navigate("/desktop-12");
  }, [navigate]);

  return (
    <div className={styles.desktop1}>
      <NavBar
        onAboutUsTextClick={onAboutUsTextClick}
        onServicesTextClick={onServicesTextClick}
      />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <EngageAIExplanation />
      <Footer />
    </div>
  );
};

export default Desktop;
