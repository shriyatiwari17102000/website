import React, { useState } from "react";
import { Card } from "react-bootstrap";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.png";
import white_rightarrow from "../../images/white_rightarrow.png";
import "./blog.css";

const Blog = () => {
  const [data, setData] = useState([
    {
      title: "Best SOP for Master (MS)",
      text: "in Data Science",
      btntext: "05 min Read",
      img: blog1,
    },
    {
      title: "PTE score required for",
      text: "Australia",
      btntext: "05 min Read",
      img: blog2,
    },
    {
      title: "Career objective for MBA",
      text: "Template",
      btntext: "05 min Read",
      img: blog3,
    },
    {
      title: "Best 42 courses in Canada",
      text: "After 12th",
      btntext: "05 min Read",
      img: blog4,
    },
  ]);

  console.log(data, "pppppppp");
  return (
    <div style={{ marginLeft: "80px" }}>
      <div className="blog_top_div">
        <div style={{ marginLeft: "150px" }}>
          {" "}
          <h1 className="blog_top_head">
            Your shortlist can make or break your study abroad journey.
          </h1>
          <p className="blog_para">
            Consult with our experts to understand how to create the best
            shortlist for your needs.
          </p>
        </div>
        <button className="blog_top_btn2">Get personalized Advice</button>
      </div>
      <div className="blog_div">
        <div>
          <h4 className="blog_head">Blogs</h4>
          <h1 className="blog_head1">Best Articles For Study Abroad</h1>
        </div>
        <button className="blog_top_btn">
          View All <img src={white_rightarrow} />
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item, index) => {
          // Define an array of colors for each card
          const colors = ["#DFDDFF", "#FFF4E2", "#E2F6FF", "#FFE1DD"];
          // Get the color based on the index, or default to the first color
          const backgroundColor = colors[index % colors.length] || colors[0];

          return (
            <Card className="blog_card" style={{ backgroundColor }}>
              <Card.Body className="blog_card_bdy">
                <Card.Title className="blog_title">{item.title}</Card.Title>
                <Card.Text className="blog_para">{item.text}</Card.Text>
                <div style={{ display: "flex" }}>
                  <button className="blog_btn">{item.btntext}</button>
                  <img className="blog_img" src={item.img} />
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
