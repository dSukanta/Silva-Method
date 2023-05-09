import React, { useContext } from "react";
import { AuthContext } from "../../../context/AllContext";
import NewHomeSlider from "../NewHomeSlider";

function SilvaBenefits() {
  const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait } =
    useContext(AuthContext);
  return (
    <div className={isDesktopOrLaptop?"w-75 m-auto p-2 mt-3":"w-80 m-auto p-2 mt-3"}>
      <div className="text-center mt-3">
        <h2
          style={{
            fontWeight: "800",
            fontSize: isDesktopOrLaptop ? "60px" : "30px",
          }}
        >
          Benefits of practising Silva Method
        </h2>
        <h5 className="mt-3 mb-3">
          Over 6 Million people in 110 countries have experienced what Silva
          Method Meditation can do.
        </h5>
       <div>
        <NewHomeSlider/>
       <p style={{ fontSize: isDesktopOrLaptop ? "18px" : "15px", paddingTop:'15px' , paddingBottom:'15px' }}>
          At The Silva Method, we believe the key to the next stage of human
          evolution lies in the mind’s hidden potential. Our mission is to
          awaken this potential for everyone on the planet. Since 1966, we’ve
          helped over 6 million people in 110 countries harness their minds and
          improve their lives in various meaningful ways. Through a scientific
          and time-tested curriculum based on the findings of our late founder
          Jose Silva (the man widely credited with bringing modern meditation to
          the West), we’ve helped our graduates spark profound and lasting
          positive change in their careers, finances, health, emotional
          wellbeing and relationships.
        </p>
       </div>
       <button className="moreAboutJoseSilvaBtn">Read More About Jose Silva</button>
      </div>
    </div>
  );
}

export default SilvaBenefits;
