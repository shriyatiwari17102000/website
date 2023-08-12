import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import dashboard_img from "../../images/dashboard_img.png";
import google from "../../images/google.png";
import barclays from "../../images/barclays.png";
import ey from "../../images/ey.png";
import amazon from "../../images/amazon.png";
import accenture from "../../images/accenture.png";
import hp from "../../images/hp.png";
import "./dashboard.css";
import white_rightarrow from "../../images/white_rightarrow.png";
import brown_rightarrow from "../../images/brown_rightarrow.png";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <Container style={{ marginLeft: "70px" }}>
      <Row>
        {/* Left Side */}
        <Col xs={12} md={6}>
          <h2 className="dash_head">Make Your Study Abroad Journey Easy </h2>
          <p className="dash_para">
            Get 1:1 coaching from students at your dream university Find the
            right counselor for your needs <br /> Connect with a global
            community of aspiring and current students
          </p>
          <div style={{ display: "flex" }}>
            <button className="dash_learnbtn">
              Learn More <img src={white_rightarrow} />
            </button>{" "}
            <button className="dash_getstartedbtn">Get Started</button>
          </div>
          <br />
          <div className="btm_para">
            <a href="#link" className="btm_para_link">
              {" "}
              <img src={brown_rightarrow} className="btm_para_link_img" />
              95%+ students get admission to their top 5 choices
            </a>
          </div>
        </Col>
        {/* Right Side */}
        <Col xs={12} md={6}>
          <img
            src={dashboard_img} // Replace with your image URL
            className="img_right"
          />
        </Col>
      </Row>
      <div style={{ display: "flex", marginTop: "40px" }}>
        <div>
          <h1 className="dash_btm_head ">
            Our students finished University to work at global offices of
          </h1>
        </div>
        <img src={google} className="dash_btm1" />
        <img src={barclays} className="dash_btm2" />
        <img src={ey} className="dash_btm3" />
        <img src={amazon} className="dash_btm4" />
        <img src={accenture} className="dash_btm5" />
        <img src={hp} className="dash_btm6" />
      </div>
    </Container>
  );
};

export default Dashboard;
