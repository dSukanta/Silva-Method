import React, { useEffect, useState } from "react";
import CustomAccordion from "./CustomAccordion";

function Lessons({ data }) {
  return (
    <div className="mt-3">
      {data &&
        data.chapters.map((chapter) => <CustomAccordion data={chapter} />)}
      {/* <CustomAccordion /> */}
      {/* <CustomAccordion />
           <CustomAccordion />
           <CustomAccordion />
           <CustomAccordion />
           <CustomAccordion /> */}
    </div>
  );
}

export default Lessons;
