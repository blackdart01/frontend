import React from "react";
import Scholarship from "./Scholarship";
// import { useState } from "react";
// import { faLineChart } from "@fortawesome/free-solid-svg-icons";
// import MatchedScholarships from "./MatchedScholarships";
const DashboardScholarships = (props) => {
  const obj = {
    margin: "0 20px",
    display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr",
    marginLeft: "auto",
    marginRight: "auto",
    justifyItems: "center",
    gap: "50px",
    paddingLeft: "25px",
    justifyContent: "space-between",
    borderLeft: "1px solid #dadada",
  };
  return (
    <div>
      <h2
        style={{
          borderLeft: "1px solid #dadada",
          margin: "75px 0 15px 0px",
          paddingLeft: "25px",
        }}
      >
        {props.txt} Scholarships
      </h2>
      <div style={obj}>
        <Scholarship
          name={"LIC HFL Vidyadhan Scholarship for UG"}
          award={"INR 15,000"}
          eligibility={"Students enrolled in graduation programme"}
          lastday={"30 Sept 2022"}
        />
        <Scholarship
          name={"Academic Excellence International Masters Scholarship"}
          award={"Variable awards"}
          eligibility={"Master's degree applicants"}
          lastday={"30 Sept 2022"}
        />
        <Scholarship
          name={"Asha Jyoti Scholarship"}
          award={"Variable awards"}
          eligibility={"UG and PG applicants"}
          lastday={"30 Sept 2022"}
        />
        <Scholarship
          name={"LIC HFL Vidyadhan Scholarship for PG"}
          award={"INR 20,000"}
          eligibility={"Students enrolled in Postgraduate Programmes (India)"}
          lastday={"30 Sept 2022"}
        />
        {/* <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship /> */}
        {/* <MatchedScholarships /> */}
      </div>
    </div>
  );
};

export default DashboardScholarships;
