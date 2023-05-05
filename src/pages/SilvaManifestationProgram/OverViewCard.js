import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsBook, BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import {RiNewspaperLine} from 'react-icons/ri';

function OverViewCard({ data }) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  //console.log(data);
  return (
    <Card style={{ width: "100%", backgroundColor: "#2f3640" }} body>
      <div
        className={`row justify-content-center ${
          isDesktopOrLaptop ? "" : "gap-2"
        }`}
      >
        <div
          className="col-sm-12 col-md-4"
          style={{ borderRight: isDesktopOrLaptop ? "1px solid gray" : "" }}
        >
          <div className="d-flex justify-content-center gap-3 align-content-center align-items-center">
            <BsBook size={40} color="white" />
            <h4 className="white-color mt-1">
              {data && data.chapters.length} Chapters
            </h4>
          </div>
        </div>
        {/* <div
          className="col-sm-12 col-md-4"
          style={{ borderRight: isDesktopOrLaptop ? "1px solid gray" : "" }}
        >
          <div className="d-flex justify-content-center gap-3 align-content-center align-items-center">
            <AiOutlineClockCircle size={40} color="white" />
            <h4 className="white-color mt-1">2 hours 7 mins</h4>
          </div>
        </div> */}
        <div className="col-sm-12 col-md-4">
          <div className="d-flex justify-content-center gap-3 align-content-center align-items-center">
            <RiNewspaperLine size={40} color="white" />
            <h4 className="white-color mt-1">
              {data && data.total_lessons} Lessons
            </h4>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default OverViewCard;
