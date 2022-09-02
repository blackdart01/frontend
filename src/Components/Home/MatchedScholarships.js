import React from "react";
import Scholarship from "./Scholarship";
const MatchedScholarships = () => {
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
    <div style={{ obj }}>
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
    </div>
  );
};

export default MatchedScholarships;
