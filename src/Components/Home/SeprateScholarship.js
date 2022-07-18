import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const SeprateScholarship = () => {
  return (
    <div>
      <Header />
      <div
        className="d-flex"
        style={{
          width: "100vw",
          height: "90vh",
          //   backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "75vw", height: "auto", borderColor: "#dadada" }}>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card.Title>AICTE Digital Marketing Internship 2022</Card.Title>
              </ListGroup.Item>
              <br />
              <Card.Subtitle className="mb-2 text-muted">
                AICTE Digital Marketing Internship 2022 is an initiative by the
                All India Council for Technical Education (AICTE) for graduate
                applicants. The selected interns will get an opportunity to work
                at BluePlanet Infosolutions India Pvt Ltd (Pan India). The
                selected interns will receive INR 10,000 and a certificate upon
                successful completion of the internship.
              </Card.Subtitle>
              <br />
              <Card.Subtitle style={{ fontSize: "18px" }}>
                <u>Award</u>
              </Card.Subtitle>
              <Card.Text className="mb-2 text-muted">Score Based</Card.Text>
              <br />
              <Card.Subtitle style={{ fontSize: "18px" }}>
                <u>Eligibility</u>
              </Card.Subtitle>
              <Card.Text className="mb-2 text-muted">
                <b>To be eligible, an applicant must -</b>
                <ul>
                  <li>Be a graduate</li>
                  <li>
                    Have basic knowledge of search engine ranking criteria of
                    leading algorithms
                  </li>
                  <li>
                    Be truly passionate about design and marketing, who want to
                    develop strong skills
                  </li>
                </ul>
              </Card.Text>
              <Card.Subtitle style={{ fontSize: "18px" }}>
                <u>Benifits.</u>
              </Card.Subtitle>
              <Card.Text className="mb-2 text-muted">
                The selected interns will receive INR 10,000 and a certificate
                upon successful completion of the internship.
              </Card.Text>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              <br />
              {/* <Card.Link href="https://internship.aicte-india.org/login_new.php?internship_uid=INTERNSHIP_16529479196285fbcf74537&level=1&company_id=CORPORATE5f28102b55b101596461099"> */}
              <Button
                variant="success"
                style={{ backgroundColor: "#3bb19b", width: "150px" }}
                href="https://internship.aicte-india.org/login_new.php?internship_uid=INTERNSHIP_16529479196285fbcf74537&level=1&company_id=CORPORATE5f28102b55b101596461099"
              >
                Apply Now
              </Button>
              {/* </Card.Link> */}
              {/* <Card.Link href="#">Another Link</Card.Link> */}
              <ListGroup.Item>
                <hr />
                <Card.Subtitle>Deadline: 2 days to go.</Card.Subtitle>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Button
            variant="success"
            style={{ backgroundColor: "#3bb19b" }}
            as={Link}
            to="../"
          >
            Back
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SeprateScholarship;
