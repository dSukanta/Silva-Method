import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { baseUrl, requestData } from "../../utils/baseUrl";
import HashLoader from "react-spinners/HashLoader";


const SingleCard = ({ name }) => {
  return <div style={{ borderRadius: '999em 999em 999em 999em', boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", display: "block", padding: '20px', gap: '1rem', backgroundColor: 'white' }}>
    <div style={{ display: 'flex', color: 'black', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      {name}
    </div>
  </div>;
};

function CountrySection() {
  const [loading, setLoading] = useState(false);

  const [locations, setLocations] = useState([])
  const [northAmericaInstructors, setNorthAmericaInstructors] = useState();
  const [globalInstructors, setGlobalInstructors] = useState();
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });


  const getLocation = async () => {
    setLoading(true)
    const res = await requestData("locationList", "POST", {});
    setLoading(false)
    console.log(res);
    if (res && res.error === false) {
      setLocations(res.data);
      setNorthAmericaInstructors(res.data[0]);
      setGlobalInstructors(res.data[1]);
      console.log(res.data[1].sub_region[5])
    }
    //console.log(data.data.blog);
  }

  useEffect(() => {
    getLocation();
  }, [])




  if (loading) {
    return (
      <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center">
          <HashLoader
            color="black"
            loading={loading}
            size={100}
          />
        </div>

      </div>
    )
  }

  return (
    <>
      <div style={{ width: '100%', backgroundColor: '#8019da' }}>
        <h3 style={{ width: isMobile ? '100%' : '70%', margin: 'auto', padding: isMobile ? '0px' : '40px', color: 'white' }}>
          {northAmericaInstructors && northAmericaInstructors.region_name}
        </h3>
        <div
          style={{
            width: "100%",
            backgroundImage: "linear-gradient(#3420e7, #da01fd)",
            margin: '0px 0px 0px 0px',
            padding: '50px'
          }}
        >
          <h3 className="white-color text-center mb-5">
            {northAmericaInstructors && northAmericaInstructors.sub_region[0].sub_region_name}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktopOrLaptop
                ? "1fr 1fr 1fr 1fr"
                : isTablet ? "1fr 1fr" : "1fr",
              width: isMobile ? "100%" : "70%",
              gap: '2rem',
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            {northAmericaInstructors && northAmericaInstructors.sub_region[0].locaiton.map((country) =>
              <SingleCard name={"SILVA METHOD " + country.country_name} />
            )}
          </div>
          <h3 className="white-color text-center mt-5 mb-5"> {northAmericaInstructors && northAmericaInstructors.sub_region[1].sub_region_name}</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktopOrLaptop
                ? "1fr 1fr 1fr 1fr"
                : isTablet ? "1fr 1fr" : "1fr",
              width: isMobile ? "100%" : "70%",
              gap: '2rem',
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            {northAmericaInstructors && northAmericaInstructors.sub_region[1].locaiton.map((country) =>
              <SingleCard name={"SILVA METHOD " + country.country_name} />
            )}
          </div>
        </div>
      </div>
      {/* END OF NORTH AMERICA SECTION */}

      <div style={{ width: '100%', backgroundColor: '#8019da' }}>
        <h3 style={{ width: isMobile ? '100%' : '70%', margin: 'auto', padding: isMobile ? '0px' : '40px', color: 'white' }}>
          {globalInstructors && globalInstructors.region_name}
        </h3>
        <div
          style={{
            width: "100%",
            backgroundImage: "linear-gradient(#3420e7, #da01fd)",
            margin: '0px 0px 10px 0px',
            padding: '50px'
          }}
        >
          <h3 className="white-color text-center mb-5"> {globalInstructors && globalInstructors.sub_region[0].sub_region_name}</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktopOrLaptop
                ? "1fr 1fr 1fr 1fr"
                : isTablet ? "1fr 1fr" : "1fr",
              width: isMobile ? "100%" : "70%",
              gap: '2rem',
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            {globalInstructors && globalInstructors.sub_region[0].locaiton.map((country) =>
              <SingleCard name={"SILVA METHOD " + country.country_name} />
            )}
          </div>
          <h3 className="white-color text-center mt-5 mb-5">
            {globalInstructors && globalInstructors.sub_region[1].sub_region_name}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktopOrLaptop
                ? "1fr 1fr 1fr 1fr"
                : isTablet ? "1fr 1fr" : "1fr",
              width: isMobile ? "100%" : "70%",
              gap: '2rem',
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            {globalInstructors && globalInstructors.sub_region[1].locaiton.map((country) =>
              <SingleCard name={"SILVA METHOD " + country.country_name} />
            )}
          </div>


          <h3 className="white-color text-center mt-5 mb-5">
            {globalInstructors && globalInstructors.sub_region[2].sub_region_name}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktopOrLaptop
                ? "1fr 1fr 1fr 1fr"
                : isTablet ? "1fr 1fr" : "1fr",
              width: isMobile ? "100%" : "70%",
              gap: '2rem',
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            {globalInstructors && globalInstructors.sub_region[2].locaiton.map((country) =>
              <SingleCard name={"SILVA METHOD " + country.country_name} />
            )}
          </div>

          {/* Carribean  */}

          <h3 className="white-color text-center mt-5 mb-5">
            {globalInstructors && globalInstructors.sub_region[3].sub_region_name}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktopOrLaptop
                ? "1fr 1fr 1fr 1fr"
                : isTablet ? "1fr 1fr" : "1fr",
              width: isMobile ? "100%" : "70%",
              gap: '2rem',
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            {globalInstructors && globalInstructors.sub_region[3].locaiton.map((country) =>
              <SingleCard name={"SILVA METHOD " + country.country_name} />
            )}
          </div>

          {/* Australia and surroundings */}

          <h3 className="white-color text-center mt-5 mb-5">
            {globalInstructors && globalInstructors.sub_region[4].sub_region_name}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktopOrLaptop
                ? "1fr 1fr 1fr 1fr"
                : isTablet ? "1fr 1fr" : "1fr",
              width: isMobile ? "100%" : "70%",
              gap: '2rem',
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            {globalInstructors && globalInstructors.sub_region[4].locaiton.map((country) =>
              <SingleCard name={"SILVA METHOD " + country.country_name} />
            )}
          </div>

          {/* Africa */}

          <h3 className="white-color text-center mt-5 mb-5">
            {globalInstructors && globalInstructors.sub_region[5].sub_region_name}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktopOrLaptop
                ? "1fr 1fr 1fr 1fr"
                : isTablet ? "1fr 1fr" : "1fr",
              width: isMobile ? "100%" : "70%",
              gap: '2rem',
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            {globalInstructors && globalInstructors.sub_region[5].locaiton.map((country) =>
              <SingleCard name={"SILVA METHOD " + country.country_name} />
            )}
          </div>

        </div>
      </div>

    </>
  );
}

export default CountrySection;
