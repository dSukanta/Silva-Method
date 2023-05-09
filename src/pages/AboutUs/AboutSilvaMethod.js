import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import SilvaLogo from "../../../src/img/shape/silva_method.png";
import JoseSilvaImg from "../../../src/img/about/joseSilva.png";
import { AuthContext } from "../../context/AllContext";
import { Link } from "react-router-dom";

const AboutSilvaMethod = () => {
  const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait } =
    useContext(AuthContext);

  return (
    <>
      <div
        className={
          isDesktopOrLaptop
            ? "text-center mt-5 w-50 m-auto p-2 mb-3"
            : "text-center mt-2 p-3"
        }
      >
        <div>
          <h2
            style={{
              fontWeight: "800",
              fontSize: isDesktopOrLaptop ? "60px" : "30px",
            }}
          >
            America's{" "}
            <span style={{ color: "#801cb6", fontWeight: "800" }}>First</span>{" "}
            personal growth program since 1966…
          </h2>
          <h5 className="mt-3">
            Over 6 Million people in 110 countries have experienced what Silva
            Method Meditation can do.
          </h5>
          <img src={JoseSilvaImg} />
        </div>
        <div>
          <p style={{ fontSize: isDesktopOrLaptop ? "18px" : "15px", paddingTop:'15px' , paddingBottom:'15px' }}>
            At The Silva Method, we believe the key to the next stage of human
            evolution lies in the mind’s hidden potential. Our mission is to
            awaken this potential for everyone on the planet. Since 1966, we’ve
            helped over 6 million people in 110 countries harness their minds
            and improve their lives in various meaningful ways. Through a
            scientific and time-tested curriculum based on the findings of our
            late founder Jose Silva (the man widely credited with bringing
            modern meditation to the West), we’ve helped our graduates spark
            profound and lasting positive change in their careers, finances,
            health, emotional wellbeing and relationships.
          </p>
          <Link
            to="/#"
            style={{
              maxWidth: isDesktopOrLaptop || isBigScreen ? "50%" : "70%",
            }}
            
          >
          <button className="moreAboutJoseSilvaBtn">Read More About Jose Silva</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutSilvaMethod;
