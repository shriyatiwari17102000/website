import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import videshify from "../../images/videshify.png";
import fb_img from "../../images/fb_img.png";
import twiter_img from "../../images/twiter_img.png";
import linkedin_img from "../../images/linkedin_img.png";
import footer_img from "../../images/footer_img.png";
import footer_leftarrow from "../../images/footer_leftarrow.png";
import footer_rightarrow from "../../images/footer_rightarrow.png";
import "./footer.css";

const Footer = () => {
  return (
    <div style={{ background: "#F6FAFF" }}>
      <Container style={{ paddingTop: "105px" }}>
        <Row>
          <Col style={{ marginRight: "100px" }}>
            <div style={{ display: "flex" }}>
              <img src={videshify} className="foot_logo_img" />
              <p className="foot_logo_para">Videshify</p>
            </div>
            <p className="foot_para">
              The largest Personalised Student Counselling Study Abroad Platform
              in the world. Obsessed with Student Success.
            </p>
            <div>
              <img src={fb_img} style={{ marginRight: "15px" }} />
              <img src={twiter_img} style={{ marginRight: "15px" }} />
              <img src={linkedin_img} />
            </div>
          </Col>
          <Col style={{ marginRight: "60px" }}>
            <h1 className="foot_head">Company</h1>
            <ul style={{ listStyle: "none" }}>
              <li className="foot_li">About us</li>
              <li className="foot_li">Privacy</li>
              <li className="foot_li">Help Center</li>
              <li className="foot_li">Career</li>
              <li className="foot_li">Terms & conditions</li>
            </ul>
          </Col>
          <Col style={{ marginRight: "60px" }}>
            <h1 className="foot_head">Popular Courses</h1>
            <ul style={{ listStyle: "none" }}>
              <li className="foot_title">Masters</li>
              <li className="foot_li">Computer Science</li>
              <li className="foot_li">Data Science & Analytics</li>
              <li className="foot_title">Bachelors</li>
              <li className="foot_li">Business Administration</li>
              <li className="foot_li">Business Analytics</li>
              <li className="foot_li">Computer Engineering</li>
              <a className="foot_link">See all courses</a>
            </ul>
          </Col>
          <Col style={{ marginRight: "60px" }}>
            <h1 className="foot_head">Top Universities</h1>
            <ul style={{ listStyle: "none" }}>
              <li className="foot_title">By Country</li>
              <li className="foot_li">USA</li>
              <li className="foot_li">Canada</li>
              <li className="foot_li">UK</li>
              <li className="foot_title">By Course</li>
              <li className="foot_li">MBA</li>
              <li className="foot_li">Computer Science</li>
              <li className="foot_li">Industrial Engineering</li>
              <a className="foot_link">See all universities</a>
            </ul>
          </Col>
          <Col>
            <h1 className="foot_head">Study Abroad Guide</h1>
            <ul style={{ listStyle: "none" }}>
              <li className="foot_li">Blogs</li>
            </ul>
            <h1 className="foot_head" style={{ marginTop: "43px" }}>
              Support
            </h1>
            <ul style={{ listStyle: "none" }}>
              <li className="foot_li">Contact us</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div style={{ display: "flex", marginTop: "95px" }}>
            {" "}
            <p className="foot_li" style={{ width: "173px" }}>
              @ Copyrights reserved 2023 videshify
            </p>
            <div style={{ display: "flex", marginLeft: "22rem", gap: "47px" }}>
              <p className="foot_li">Terms & service</p>
              <p className="foot_li">Privacy Policies</p>
              <p className="foot_li">Cookies</p>
            </div>
          </div>
        </Row>
        <footer style={{ display: "flex", marginTop: "-100px" }}>
          <img
            src={footer_leftarrow}
            style={{
              marginTop: "11rem",
              transform: "rotate(350deg)",
              marginRight: "-6rem",
            }}
          />
          <img src={footer_img} />
          <img
            src={footer_rightarrow}
            style={{
              marginTop: "14rem",
              marginLeft: "-8rem",
              transform: "rotate(6deg)",
            }}
          />
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
