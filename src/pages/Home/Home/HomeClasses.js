import React, { useContext, useEffect, useState } from "react";
import HomeSingleClass from "./HomeSingleClass";
import { AuthContext } from "../../../context/AllContext";
import SingleClassCards from "./SingleClassCard";

const HomeClasses = () => {
   const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait } =useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  const getData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");

    const formData = new FormData();
    formData.append("start_index", "0");
    formData.append("no_of_records", "100");

    const options = {
      method: "POST",
      headers: myHeaders,
      body: formData,
    };
    const res = await fetch(
      `https://projectsites.in/silvamethod/api/home`,
      options
    );
    const data = await res.json();
    //console.log(data.data.classes);
    setClasses(data.data.classes);
  };

  useEffect(() => {
    getData();
  }, []);

  //console.log(classes);

  return (
    <>
      <section className="servcies-area gray-bg pt-20 pb-10 mt-25">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div className="section-title text-center pos-rel mb-15">
                {/* <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div> */}
                <div className="section-text pos-rel home_ser_title">
                  {/* <h5>Upcoming Live & Online Classes</h5> */}
                  <h2
                    style={{
                      fontWeight: "800",
                      fontSize: isDesktopOrLaptop ? "60px" : "30px",
                    }}
                  >
                    Upcoming Live & Online Classes
                  </h2>
                </div>
                <div className="section-line pos-rel">
                  <img src="img/shape/section-title-line.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 justify-content-start row-cols-lg-3">
            {classes &&
              classes.map((classes) => (
                <SingleClassCards key={classes.course_id} data={classes} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeClasses;
