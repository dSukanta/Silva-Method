import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

var CountryData = [
  {
    title: "Silva Method California",
    flag: "img/country/Flag_of_California.png",
  },
  {
    title: "Silva Method Arizona",
    flag: "img/country/Flag_of_Arizona.png",
  },
  {
    title: "Silva Method Australia",
    flag: "img/country/Flag_of_Australia.png",
  },
  {
    title: "Silva Method UAE",
    flag: "img/country/Flag_of_the_United_Arab_Emirates.png",
  },
  {
    title: "Silva Method Texas",
    flag: "img/country/Flag_of_Texas.png",
  },
  {
    title: "Silva Method Connecticut",
    flag: "img/country/Flag_of_Connecticut.png",
  },
  {
    title: "Silva Method Spain",
    flag: "img/country/Flag_of_Spain.png",
  },
  {
    title: "Silva Method Malaysia",
    flag: "img/country/Flag_of_Malaysia.webp",
  },
  {
    title: "Silva Method Florida",
    flag: "img/country/Flag_of_Florida.png",
  },
  {
    title: "Silva Method Ohio",
    flag: "img/country/Flag_of_Ohio.png",
  },
  {
    title: "Silva Method Turkey",
    flag: "img/country/Flag_of_Turkey.png",
  },
  {
    title: "Silva Method Ontario Canada",
    flag: "img/country/Flag-Canada.webp",
  },
  {
    title: "Silva Method New York",
    flag: "img/country/flag-New-York.webp",
  },
  {
    title: "Silva Method Washington",
    flag: "img/country/washington.webp",
  },
  {
    title: "Silva Method Argentina",
    flag: "img/country/Flag-Argentina.webp",
  },
  {
    title: "Silva Method United Kingdom",
    flag: "img/country/Flag_of_the_United_Kingdom.png",
  },
  {
    title: "Silva Method New Jersey",
    flag: "img/country/Flag-Jersey.webp",
  },
  {
    title: "Silva Method Kentucky",
    flag: "img/country/Kentucky-.webp",
  },
  {
    title: "Silva Method Italy",
    flag: "img/country/Flag_of_Italy.png",
  },
  {
    title: "Silva Method Venezuela",
    flag: "img/country/Flag-Venezuela.webp",
  },
];
const SingleCard = ({ name, flag }) => {
  return <div style={{borderRadius:'40px 999em 999em 40px', boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", display: "flex", padding:'10px', gap:'1rem', backgroundColor:'white', }}>
            <div style={{color:'black', fontWeight:'bold',display:'flex' ,justifyContent:'center', alignItems:'center'}}>
                {name}
            </div>
  </div>;
};

function CountrySection() {
 
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });

  return (
    <div style={{width:'100%', backgroundColor:'#8019da'}}>
    <h3 style={{width:'70%', margin:'auto', padding:'10px',color:'white'}}>Find Out our Certified Silva Method Instructors Globally.</h3>
    <div
      style={{
        width: "100%",
        backgroundImage: "linear-gradient(#3420e7, #da01fd)",
        margin:'0px 0px 10px 0px',
        padding:'25px'
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktopOrLaptop
            ? "1fr 1fr 1fr 1fr"
            :isTablet? "1fr 1fr":"1fr",
          width: "70%",
          gap:'1rem',
          margin: "auto",
          justifyContent: "space-evenly",
        }}
      >
        {CountryData.map((country)=>
            <SingleCard flag={country.flag} name={country.title}/>
        )}
      </div>
    </div>
    </div>
  );
}

export default CountrySection;
