import React from "react";
import Scholarship from "./Scholarship";
// import useFetch from "../hooks/useFetch";

function Scholarships() {
  const obj = {
    margin: "75px 50px",
    display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
    gap: "50px 0px",
  };
  // const pro = {
  //   name: "AICTE SCHOLARSHIP",
  //   award: "SCORE BASED",
  //   eligibility: "BE/BTECH",
  //   lastday: "2 days to go",
  // };

  //   const featured = () => {
  //   const {data,loading,error} =
  // }

  return (
    <div style={obj}>
      <Scholarship
        name={"HDFC Badhte Kadam Scholarship"}
        award={"INR 30,000"}
        eligibility={
          "For Class 12 passed students pursuing general graduation (any year)"
        }
        lastday={"30 Sept 2022"}
        lnk={
          "https://www.buddy4study.com/page/hdfc-ltds-badhte-kadam-scholarship?ref=AllScholarship"
        }
      />
      <Scholarship
        name={"LIC HFL Vidyadhan Scholarship for UG"}
        award={"INR 15,000"}
        eligibility={"Students enrolled in graduation programme"}
        lastday={"30 Sept 2022"}
        lnk={
          "https://www.buddy4study.com/page/lic-hfl-vidhyadhan-scholarship?ref=AllScholarship"
        }
      />
      <Scholarship
        name={"Academic Excellence International Masters Scholarship"}
        award={"Variable awards"}
        eligibility={"Master's degree applicants"}
        lastday={"30 Sept 2022"}
        lnk={
          "https://www.buddy4study.com/scholarship/academic-excellence-international-masters-scholarship"
        }
      />
      <Scholarship
        name={"Asha Jyoti Scholarship"}
        award={"Variable awards"}
        eligibility={"UG and PG applicants"}
        lastday={"30 Sept 2022"}
        lnk={
          "https://www.buddy4study.com/scholarship/asha-jyoti-scholarship-scheme"
        }
      />
      <Scholarship
        name={"LIC HFL Vidyadhan Scholarship for PG"}
        award={"INR 20,000"}
        eligibility={"Students enrolled in Postgraduate Programmes (India)"}
        lastday={"30 Sept 2022"}
        lnk={
          "https://www.buddy4study.com/page/lic-hfl-vidhyadhan-scholarship?ref=AllScholarship"
        }
      />
      <Scholarship
        name={
          "Indian Institute of Astrophysics (IIA) Post-Doctoral Researcher Fellowship"
        }
        award={"INR 35,000 per month"}
        eligibility={"Ph.D. degree holders"}
        lastday={"30 Sept 2022"}
        lnk={
          "https://www.buddy4study.com/scholarship/indian-institute-of-astrophysics-iia-post-doctoral-researcher-fellowship"
        }
      />
      <Scholarship
        name={"HDFC Badhte Kadam Scholarship"}
        award={"INR 1,00,000"}
        eligibility={
          "For Class 12 passed students pursuing professional graduation courses (any year)"
        }
        lastday={"30 Sept 2022"}
        lnk={
          "https://www.buddy4study.com/page/hdfc-ltds-badhte-kadam-scholarship?ref=AllScholarship"
        }
      />
      <Scholarship
        name={"Inlaks Research Travel Grants"}
        award={"Variable awards"}
        eligibility={"Ph.D. applicants in Humanities and Social Sciences"}
        lastday={"1 Oct 2022"}
        lnk={
          "https://www.buddy4study.com/scholarship/inlaks-research-travel-grants"
        }
      />
      <Scholarship
        name={"Pre Matric Scholarship"}
        award={"Variable awards"}
        eligibility={"Class 9 and 10 students"}
        lastday={"7 Oct 2022"}
        lnk={
          "https://www.buddy4study.com/scholarship/pre-matric-scholarship-for-minority-students-uttar-pradesh"
        }
      />
      <Scholarship
        name={"SOF International English Olympiad (IEO)"}
        award={"Up to INR 50,000, medals and certificates"}
        eligibility={"Students of Class 1 to 12"}
        lastday={"22 Oct 2022"}
        lnk={
          "https://www.buddy4study.com/scholarship/sof-international-english-olympiad-ieo"
        }
      />
      <Scholarship
        name={"ASEAN-India Research Training Fellowship"}
        award={"Up to INR 60,000 per month and other benefits"}
        eligibility={"Master's degree holders"}
        lastday={"30 Oct 2022"}
        lnk={
          "https://www.buddy4study.com/scholarship/asean-india-research-training-fellowship-ai-rtf"
        }
      />
      <Scholarship
        name={"Raman Kant Munjal Scholarship"}
        award={"Up to INR 3 lakh per year for 3 years"}
        eligibility={"Class 12 passed students"}
        lastday={"31 Oct 2022"}
        lnk={
          "https://www.buddy4study.com/scholarship/raman-kant-munjal-scholarship"
        }
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
}

export default Scholarships;
