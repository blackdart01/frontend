import React from "react";
import Header from "../Header";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100vw",
          height: "40vh",
          backgroundColor: "#3bb19b",
          position: "fixed",
        }}
      >
        <div style={{ alignItems: "center", margin: "6% 10%" }}>
          {/* <div> */}
          <p
            style={{
              width: "50%",
              fontSize: "4em",
              color: "white",
              fontFamily: "montserrat",
            }}
          >
            Make Your Success Speak.
          </p>
          {/* </div> */}
          <br />
          <div
            className="d-flex"
            style={{
              fontFamily: "Nunito",
            }}
          >
            <p
              style={{
                fontSize: "2.5em",
                fontWeight: "500",
              }}
            >
              About Us
            </p>
            <div className="d-flex">
              <Card
                style={{ width: "15rem", fontSize: "1.5em", fontWeight: "300" }}
              >
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>Some qui</Card.Text>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
