import React from "react";
import { Dropdown } from "react-bootstrap";
import "./blog.css";
import frequent_girl from "../../images/frequent_girl.png";

const dropdownData = [
  ["Option 1", "Option 2", "Option 3"],
  ["Choice A", "Choice B", "Choice C"],
  ["Item X", "Item Y", "Item Z"],
  ["Category 1", "Category 2", "Category 3"],
  ["Selection A", "Selection B", "Selection C"],
];

const dropdownNames = [
  "What is the vision and mission of Videshify?",
  "How does Videshify help me?",
  "How do I reach out to support?",
  "How do I sign up?",
  "Are Videshify services free or paid?",
];

const FrequentlyAskQuestions = () => {
  return (
    <div style={{ marginLeft: "80px", marginTop: "90px" }}>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <h5 className="blog_head">Frequently Ask Question</h5>
            <h5 className="blog_head1">Best Success Rates Among Counseslors</h5>
          </div>

          {dropdownData.map((options, index) => (
            <Dropdown key={index} className="dropdown_main">
              <Dropdown.Toggle
                id={`dropdown-basic-${index}`}
                className="dropdown_div"
              >
                {dropdownNames[index]}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "668px" }}>
                {options.map((option, optionIndex) => (
                  <Dropdown.Item key={optionIndex}>{option}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
        <img src={frequent_girl} className="freq_img" />
      </div>
      <div className="btm_freq">
        <p className="btm_freq_para">
          Still if you have a question please ask at{" "}
        </p>
        <span className="btm_freq_span">+917847847847</span>
      </div>
    </div>
  );
};

export default FrequentlyAskQuestions;
