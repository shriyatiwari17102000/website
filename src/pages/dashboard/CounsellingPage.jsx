import React from "react";
import "./dashboard.css";
import ScrollDottedLine from "./ScrollDottedLine";
import con_img1 from "../../images/con_img1.png";
import con_img2 from "../../images/con_img2.png";
import con_img3 from "../../images/con_img3.png";
import con_img4 from "../../images/con_img4.png";
import con_img5 from "../../images/con_img5.png";

const sections = [
  {
    title: "Community with alumni 🧐",
    head: "Get 1:1 coaching from students at your dream university",
    content:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit Corem ipsum dolor sit amet, consectetur adipiscing elit..",
    image: con_img1,
  },
  {
    title: "Shortlisting ✅",
    head: "Find the best counselor for your needs",
    content:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit Corem ipsum dolor sit amet, consectetur adipiscing elit..",
    image: con_img2,
  },
  {
    title: "Software 🗣",
    head: "CRM software for counselor",
    content:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit Corem ipsum dolor sit amet, consectetur adipiscing elit..",
    image: con_img3,
  },
  {
    title: "Marketplace 📝",
    head: "Counselor Marketplace",
    content:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit Corem ipsum dolor sit amet, consectetur adipiscing elit..",
    image: con_img4,
  },
  {
    title: "Applications & Offers 📩",
    head: "Experienced Counselors",
    content:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit Corem ipsum dolor sit amet, consectetur adipiscing elit..",
    image: con_img5,
  },
];

function CounsellingPage() {
  return (
    <div className="con_section">
      <div style={{ marginLeft: "70px" }}>
        <h4 className="con_title">All in one package</h4>
        <h1 className="con_head">Find all your study abroad needs here</h1>
      </div>
      {sections.map((section, index) => (
        <div className="section" key={index}>
          {console.log(index % 2 === 0, "oooooooooo")}
          {index % 2 === 0 ? (
            <>
              <div className="left">
                <img
                  src={section.image}
                  alt={`Image ${index + 1}`}
                  className="con_img"
                  style={{ marginRight: "87px" }}
                />
              </div>
              <div className="right" style={{ marginLeft: "108px" }}>
                <h2 className="con_right_title">{section.title}</h2>
                <h2 className="con_right_head">{section.head}</h2>
                <p className="con_right_para">{section.content}</p>
                <button className="con_btn">Get Started</button>
              </div>
            </>
          ) : (
            <>
              <div className="right" style={{ marginLeft: "126px" }}>
                <h2 className="con_right_title">{section.title}</h2>
                <h2 className="con_right_head">{section.head}</h2>
                <p className="con_right_para">{section.content}</p>
                <button className="con_btn">Get Started</button>
              </div>
              <div className="right" style={{ marginRight: "70px" }}>
                <img src={section.image} alt={`Image ${index + 1}`} />
              </div>
            </>
          )}
        </div>
      ))}
      <ScrollDottedLine />
    </div>
  );
}

export default CounsellingPage;
