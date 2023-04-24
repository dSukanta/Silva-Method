import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

var NorthAmerica = [
  {
    title: "Silva Method Arizona",
    flag: "img/country/Flag_of_California.png",
  },
  {
    title: "Silva Method Boston",
    flag: "img/country/Flag_of_Arizona.png",
  },
  {
    title: "Silva Method California",
    flag: "img/country/Flag_of_Australia.png",
  },
  {
    title: "Silva Method Chicago",
    flag: "img/country/Flag_of_the_United_Arab_Emirates.png",
  },
  {
    title: "Silva Method Connecticut",
    flag: "img/country/Flag_of_Texas.png",
  },
  {
    title: "Silva Method D.C.",
    flag: "img/country/Flag_of_Connecticut.png",
  },
  {
    title: "Silva Method Delaware",
    flag: "img/country/Flag_of_Spain.png",
  },
  {
    title: "Silva Method Florida",
    flag: "img/country/Flag_of_Malaysia.webp",
  },
  {
    title: "Silva Method Georgia",
    flag: "img/country/Flag_of_Florida.png",
  },
  {
    title: "Silva Method Kentucky",
    flag: "img/country/Flag_of_Ohio.png",
  },
  {
    title: "Silva Method Lousiana",
    flag: "img/country/Flag_of_Turkey.png",
  },
  {
    title: "Silva Method Maryland",
    flag: "img/country/Flag-Canada.webp",
  },
  {
    title: "Silva Method Michigan",
    flag: "img/country/flag-New-York.webp",
  },
  {
    title: "Silva Method Nevada",
    flag: "img/country/washington.webp",
  },
  {
    title: "Silva Method New Hamsphire",
    flag: "img/country/Flag-Argentina.webp",
  },
  {
    title: "Silva Method New Jersey",
    flag: "img/country/Flag_of_the_United_Kingdom.png",
  },
  {
    title: "Silva Method New York",
    flag: "img/country/Flag-Jersey.webp",
  },
  {
    title: "Silva Method Northwest Area",
    flag: "img/country/Kentucky-.webp",
  },
  {
    title: "Silva Method Ohio",
    flag: "img/country/Flag_of_Italy.png",
  },
  {
    title: "Silva Method Oregon",
    flag: "img/country/Flag-Venezuela.webp",
  },
  {
    title: "Silva Method Pennsylvania"
  },
  {
    title: "Silva Method Texas"
  },
  {
    title: "Silva Method Virginia",
  },
  {
    title: "Silva Method Washington"
  }
];

let canada = [
  { title: "Silva Method Atlantic Canada" },
  { title: "Silva Method British Columbia" },
  { title: "Silva Method Ontario" },
  { title: "Silva Method Quebec" },
]


let Europe = [
  {title:"Silva Method Austria"},
  {title:"Silva Method Belgium"},
  {title:"Silva Method Bosnia"},
  {title:"Silva Method Bulgaria"},
  {title:"Silva Method Croatia"},
  {title:"Silva Method Cyprus"},
  {title:"Silva Method Czech Republic"},
  {title:"Silva Method Denmark"},
  {title:"Silva Method Estonia"},
  {title:"Silva Method France"},
  {title:"Silva Method Germany"},
  {title:"Silva Method Great Britain"},
  {title:"Silva Method Greece"},
  {title:"Silva Method Hungary"},
  {title:"Silva Method Herzegivina"},
  {title:"Silva Method Ireland"},
  {title:"Silva Method Italy"},
  {title:"Silva Method Latvia"},
  {title:"Silva Method Luthuania"},
  {title:"Silva Method Luxembourg"},
  {title:"Silva Method Netherlands"},
  {title:"Silva Method Norway"},
  {title:"Silva Method Poland"},
  {title:"Silva Method Portugal"},
  {title:"Silva Method Romania"},
  {title:"Silva Method Russia"},
  {title:"Silva Method Serbia"},
  {title:"Silva Method Slovak Republic"},
  {title:"Silva Method Slovenia"},
  {title:"Silva Method Spain"},
  {title:"Silva Method Sweden"},
  {title:"Silva Method Switzerland"},
  {title:"Silva Method Turkey"},
  {title:"Silva Method Ukraine"}
]

let Asia = [
  {title:"Silva Method Bangladesh"},
  {title:"Silva Method China"},
  {title:"Silva Method Hong Kong"},
  {title:"Silva Method India"},
  {title:"Silva Method Iran"},
  {title:"Silva Method Iraq"},
  {title:"Silva Method Israel"},
  {title:"Silva Method Japan"},
  {title:"Silva Method Kazakhstan"},
  {title:"Silva Method Kuwait"},
  {title:"Silva Method Malayasia"},
  {title:"Silva Method Pakistan"},
  {title:"Silva Method Singapore"},
  {title:"Silva Method South Korea"},
  {title:"Silva Method Taiwan"},
  {title:"Silva Method UAE"}
]

let southAmerica = [
  {title:"Silva Method Argentina"},
  {title:"Silva Method Brazil"},
  {title:"Silva Method Colombia"},
  {title:"Silva Method Peru"},
  {title:"Silva Method Venezuela"}
]

let Caribbean = [
  {title:"Silva Method Anguilla"},
  {title:"Silva Method Guadeloupe"},
  {title:"Silva Method Martinique"},
  {title:"Silva Method Saint Martin"},
  {title:"Silva Method St. Maarten"}
]

let australia = [
  {title:"Silva Method Australia"},
  {title:"Silva Method New Zealand"}
]

let africa = [
  {title:"Silva Method North Africa"},
  {title:"Silva Method South Africa"}
]

const SingleCard = ({ name }) => {
  return <div style={{ borderRadius: '999em 999em 999em 999em', boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", display: "block", padding: '20px', gap: '1rem', backgroundColor: 'white' }}>
    <div style={{ display: 'flex', color: 'black', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      {name}
    </div>
  </div>;
};

function CountrySection() {

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });

  return (
    <>
      <div style={{ width: '100%', backgroundColor: '#8019da' }}>
        <h3 style={{ width: isMobile ? '100%' : '70%', margin: 'auto', padding: isMobile ? '0px' : '40px', color: 'white' }}>
          North America Instructors
        </h3>
        <div
          style={{
            width: "100%",
            backgroundImage: "linear-gradient(#3420e7, #da01fd)",
            margin: '0px 0px 0px 0px',
            padding: '50px'
          }}
        >
          <h3 className="white-color text-center mb-5">United States</h3>
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
            {NorthAmerica.map((country) =>
              <SingleCard name={country.title} />
            )}
          </div>
          <h3 className="white-color text-center mt-5 mb-5">Canada</h3>
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
            {canada.map((country) =>
              <SingleCard name={country.title} />
            )}
          </div>
        </div>
      </div>
      {/* END OF NORTH AMERICA SECTION */}
      <div style={{ width: '100%', backgroundColor: '#8019da' }}>
        <h3 style={{ width: isMobile ? '100%' : '70%', margin: 'auto', padding: isMobile ? '0px' : '40px', color: 'white' }}>
        International Instructors
        </h3>
        <div
          style={{
            width: "100%",
            backgroundImage: "linear-gradient(#3420e7, #da01fd)",
            margin: '0px 0px 10px 0px',
            padding: '50px'
          }}
        >
          <h3 className="white-color text-center mb-5">Europe</h3>
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
            {Europe.map((country) =>
              <SingleCard name={country.title} />
            )}
          </div>
          <h3 className="white-color text-center mt-5 mb-5">Asia</h3>
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
            {Asia.map((country) =>
              <SingleCard name={country.title} />
            )}
          </div>

          {/* south america */}

          <h3 className="white-color text-center mt-5 mb-5">South America</h3>
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
            {southAmerica.map((country) =>
              <SingleCard name={country.title} />
            )}
          </div>

          {/* Carribean  */}
         
          <h3 className="white-color text-center mt-5 mb-5">Caribbean</h3>
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
            {Caribbean.map((country) =>
              <SingleCard name={country.title} />
            )}
          </div>

          {/* Australia and surroundings */}

          <h3 className="white-color text-center mt-5 mb-5">Australia and surroundings</h3>
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
            {australia.map((country) =>
              <SingleCard name={country.title} />
            )}
          </div>

          {/* Africa */}

          <h3 className="white-color text-center mt-5 mb-5">Africa</h3>
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
            {africa.map((country) =>
              <SingleCard name={country.title} />
            )}
          </div>

        </div>
      </div>

    </>
  );
}

export default CountrySection;
