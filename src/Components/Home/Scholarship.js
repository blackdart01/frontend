import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";

function Scholarship(props) {
  const objFlex = {
    display: "flex",
    justifyContent: "center",
  };
  // let Navigate = useNavigate();
  const routeChange = () => {
    // Navigate("../details");
    window.open(props.lnk, "_self");
  };
  // const lineObj = {
  //   width: "1px",
  //   height: "50px",
  //   backgroundColor: "black",
  //   margin: "0 20px 0 -5px",
  // };
  return (
    <div>
      <Card
        style={{ width: "28rem", height: "16rem", border: "1px solid #dadada" }}
      >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
            }}
          >
            {props.name}
            {/* AICTE Scholarship */}
          </Card.Title>
          <hr style={{ height: "2px" }} />
          <div style={objFlex}>
            <div
              style={{
                width: "50%",
                borderRight: "1px solid",
                textAlign: "center",
                paddingRight: "5px",
              }}
            >
              {/* <Card.Subtitle style={{ display: "block", margin: "0 auto" }}> */}
              <Card.Subtitle>Award</Card.Subtitle>
              <Card.Text>{props.award}</Card.Text>
            </div>
            {/* <div style={lineObj}></div> */}
            <div
              style={{
                width: "50%",
                borderLeft: "1px solid",
                paddingLeft: "5px",
                textAlign: "center",
              }}
            >
              <Card.Subtitle>Eligibility</Card.Subtitle>
              <Card.Text>{props.eligibility}</Card.Text>
            </div>
          </div>
          <br />
          <Button
            variant="primary"
            style={{
              backgroundColor: "#3bb19b",
              border: "none",
              display: "block",
              position: "absolute",
              bottom: "5%",
              left: "50%",
              transform: "translate(-50%,-100%)",
              // width: "100%",
              margin: "auto",
            }}
            onClick={routeChange}
          >
            View Scholarship
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{props.lastday}</Card.Footer>
      </Card>
    </div>
  );
}

export default Scholarship;
