import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

var CountryData = [
  { id:1,
    title: "Silva Method California",
    flag: "img/country/Flag_of_California.png",
  },
  { id:2,
    title: "Silva Method Arizona",
    flag: "img/country/Flag_of_Arizona.png",
  },
  { id:3,
    title: "Silva Method Australia",
    flag: "img/country/Flag_of_Australia.png",
  },
  { id:4,
    title: "Silva Method UAE",
    flag: "img/country/Flag_of_the_United_Arab_Emirates.png",
  },
  { id:5,
    title: "Silva Method Texas",
    flag: "img/country/Flag_of_Texas.png",
  },
  { id:6,
    title: "Silva Method Connecticut",
    flag: "img/country/Flag_of_Connecticut.png",
  },
  { id:7,
    title: "Silva Method Spain",
    flag: "img/country/Flag_of_Spain.png",
  },
  { id:8,
    title: "Silva Method Malaysia",
    flag: "img/country/Flag_of_Malaysia.webp",
  },
  { id:9,
    title: "Silva Method Florida",
    flag: "img/country/Flag_of_Florida.png",
  },
  { id:10,
    title: "Silva Method Ohio",
    flag: "img/country/Flag_of_Ohio.png",
  },
  { id:11,
    title: "Silva Method Turkey",
    flag: "img/country/Flag_of_Turkey.png",
  },
  { id:12,
    title: "Silva Method Ontario Canada",
    flag: "img/country/Flag-Canada.webp",
  },
  { id:13,
    title: "Silva Method New York",
    flag: "img/country/flag-New-York.webp",
  },
  { id:14,
    title: "Silva Method Washington",
    flag: "img/country/washington.webp",
  },
  { id:15,
    title: "Silva Method Argentina",
    flag: "img/country/Flag-Argentina.webp",
  },
  { id:16,
    title: "Silva Method United Kingdom",
    flag: "img/country/Flag_of_the_United_Kingdom.png",
  },
  { id:17,
    title: "Silva Method New Jersey",
    flag: "img/country/Flag-Jersey.webp",
  },
  { id:18,
    title: "Silva Method Kentucky",
    flag: "img/country/Kentucky-.webp",
  },
  { id:19,
    title: "Silva Method Italy",
    flag: "img/country/Flag_of_Italy.png",
  },
  { id:20,
    title: "Silva Method Venezuela",
    flag: "img/country/Flag-Venezuela.webp",
  },
];
const SingleCard = ({ name }) => {
  return (
    <div
      style={{
        borderRadius: "999em 999em 999em 999em",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "block",
        padding: "20px",
        gap: "1rem",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "black",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {name}
      </div>
    </div>
  );
};

function HomeCountrySection() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });

  return (
    <div style={{ width: "100%", backgroundColor: "#8019da" }}>
      <h3
        style={{
          width: isMobile ? "100%" : "70%",
          margin: "auto",
          padding: isMobile ? "0px" : "40px",
          color: "white",
        }}
      >
        Find Out our Certified Silva Method Instructors Globally.
      </h3>
      <div
        style={{
          width: "100%",
          backgroundImage: "linear-gradient(#3420e7, #da01fd)",
          margin: "0px 0px 10px 0px",
          padding: "50px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktopOrLaptop
              ? "1fr 1fr 1fr 1fr"
              : isTablet
              ? "1fr 1fr"
              : "1fr",
            width: isMobile ? "100%" : "70%",
            gap: "2rem",
            margin: "auto",
            justifyContent: "space-evenly",
          }}
        >
          {CountryData.map((country) => (
            <SingleCard key={country.id} name={country.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCountrySection;
