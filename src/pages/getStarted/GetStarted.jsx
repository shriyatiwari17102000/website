// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import dashboard_img from "../../images/dashboard_img.png";
// import "../dashboard/dashboard.css";

// const GetStarted = () => {
//   return (
//     <Container style={{ marginLeft: "57px" }}>
//       <Row>
//         {/* Left Side */}
//         <Col xs={12} md={6}>
//           <h2 className="dash_head">Our past results speak for themselves</h2>
//           <p className="dash_para">Find Your Ideal Study Destination</p>

//           <button className="dash_learnbtn">Get Started</button>
//         </Col>
//         {/* Right Side */}
//         <Col xs={12} md={6}>
//           <Row>
//             {" "}
//             <Col>
//               <p>Find Your Ideal Study Destination</p>
//               <p>Find Your Ideal Study Destination</p>
//               <p>Find Your Ideal Study Destination</p>
//             </Col>
//           </Row>{" "}
//           <Col>
//             <Row>
//               <p>Find Your Ideal Study Destination</p>
//               <p>Find Your Ideal Study Destination</p>
//               <p>Find Your Ideal Study Destination</p>
//             </Row>
//           </Col>
//           <Row>
//             {" "}
//             <Col>
//               <p>Find Your Ideal Study Destination</p>
//               <p>Find Your Ideal Study Destination</p>
//               <p>Find Your Ideal Study Destination</p>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default GetStarted;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./getstarted.css";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import image6 from "../../images/image6.png";
import image7 from "../../images/image7.png";
import image8 from "../../images/image8.png";
import image9 from "../../images/image9.png";
import image10 from "../../images/image10.png";
import image11 from "../../images/image11.png";
import image12 from "../../images/image12.png";

const GetStarted = () => {
  return (
    <div className="getStarteddiv">
      <Container>
        <Row>
          <Col xs={12} md={6} style={{ marginTop: "97px" }}>
            <h2 className="dash_head">Our past results speak for themselves</h2>
            <p className="dash_para" style={{ marginTop: "6px" }}>
              Find Your Ideal Study Destination
            </p>

            <button
              className="dash_learnbtn"
              style={{ marginTop: "46px", width: "240px", height: "66px" }}
            >
              Get Started
            </button>
          </Col>
          <Row style={{ width: "50%" }}>
            <Col xs={12} md={3} style={{ marginTop: "37px" }}>
              <div
                className="image-column"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px" /* Adjust the gap as needed */,
                }}
              >
                <img src={image1} alt="Image 1" className="img-fluid1 " />
                <img src={image5} alt="Image 2" className="img-fluid2 img" />
                <img src={image8} alt="Image 3" className="img-fluid1 img" />
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px" /* Adjust the gap as needed */,
                }}
              >
                <img
                  src={image2}
                  alt="Image 4"
                  className="img-fluid1 "
                  style={{ height: "42px" }}
                />
                <img
                  src={image6}
                  alt="Image 5"
                  className="img-fluid5 img"
                  style={{ marginLeft: "12px" }}
                />
                <img src={image7} alt="Image 6" className="img-fluid6 img" />
                <img src={image10} alt="Image 6" className="img-fluid7 img" />
              </div>
            </Col>
            <Col xs={12} md={3} style={{ marginTop: "37px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px" /* Adjust the gap as needed */,
                }}
              >
                <img src={image5} alt="Image 8" className="img-fluid2  " />
                <img src={image8} alt="Image 9" className="img-fluid2 img" />
                <img
                  src={image11}
                  alt="Image 10"
                  className="img-fluid5 img"
                  style={{ marginLeft: "12px" }}
                />
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px" /* Adjust the gap as needed */,
                }}
              >
                <img src={image3} alt="Image 10" className="img-fluid11 " />
                <img src={image4} alt="Image 11" className="img-fluid12 img" />
                <img src={image9} alt="Image 12" className="img-fluid13 img" />
                <img src={image12} alt="Image 12" className="img-fluid14 img" />
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default GetStarted;
