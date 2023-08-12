import React, { useRef, useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css";
import "./crousels.css";
import righticon from "../../images/righticon.png";
import lefticon from "../../images/lefticon.png";
import find_card1 from "../../images/find_card1.png";
import find_card2 from "../../images/find_card2.png";
import find_card3 from "../../images/find_card3.png";
import findcard_star from "../../images/findcard_star.png";
import btn_arrow from "../../images/btn_arrow.png";
import USAflag from "../../images/USAflag.png";
import white_next from "../../images/white_next.png";
import white_prev from "../../images/white_prev.png";
import white_rightarrow from "../../images/white_rightarrow.png";

import { Card, Button } from "react-bootstrap";

const FindCounselors = () => {
  const data = [
    {
      name: "Nishant Choudhary",
      img: find_card1,
      para: "M.sc (master of computer science)",
      university: "Boston University",
      rating: "4.7 (767)",
      price: "$15",
      pricespan: "Hourly",
      info: "Nishant has 67.77 % success rate",
    },
    {
      name: "Nishant Choudhary",
      para: "M.sc (master of computer science)",
      img: find_card2,
      university: "Boston University",
      rating: "4.7 (767)",
      price: "$15",
      pricespan: "Hourly",
      info: "Nishant has 67.77 % success rate",
    },
    {
      name: "Nishant Choudhary",
      para: "M.sc (master of computer science)",
      img: find_card3,
      university: "Boston University",
      rating: "4.7 (767)",
      price: "$15",
      pricespan: "Hourly",
      info: "Nishant has 67.77 % success rate",
    },
    {
      name: "Nishant Choudhary",
      para: "M.sc (master of computer science)",
      img: find_card1,
      university: "Boston University",
      rating: "4.7 (767)",
      price: "$15",
      pricespan: "Hourly",
      info: "Nishant has 67.77 % success rate",
    },
    {
      name: "Nishant Choudhary",
      para: "M.sc (master of computer science)",
      img: find_card2,
      university: "Boston University",
      rating: "4.7 (767)",
      price: "$15",
      pricespan: "Hourly",
      info: "Nishant has 67.77 % success rate",
    },
    {
      name: "Nishant Choudhary",
      para: "M.sc (master of computer science)",
      img: find_card3,
      university: "Boston University",
      rating: "4.7 (767)",
      price: "$15",
      pricespan: "Hourly",
      info: "Nishant has 67.77 % success rate",
    },
    {
      name: "Nishant Choudhary",
      img: find_card1,
      para: "M.sc (master of computer science)",
      university: "Boston University",
      rating: "4.7 (767)",
      price: "$15",
      pricespan: "Hourly",
      info: "Nishant has 67.77 % success rate",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      setActiveSlide((prevSlide) => (prevSlide + 1) % data.length);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      setActiveSlide(
        (prevSlide) => (prevSlide - 1 + data.length) % data.length
      );
    }
  };

  const swiperParams = {
    spaceBetween: 380,
    slidesPerView: 4, // Show all 4 cards at a time
    centeredSlides: false, // Do not center the slides
    allowTouchMove: false, // Disable manual scrolling
  };

  // const cardStyle = {
  //   width: "500px",
  //   height: "417px",
  // };

  return (
    <div className="find_main_div">
      <div className="image-slider">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "45px",
            marginTop: "75px",
          }}
        >
          <div>
            <h6 className="sucess_title">Top Student Coaches for you</h6>
            <h2 className="success_head success_head2">
              Chose from a stellar list of student at top global universities
            </h2>
          </div>
          <button className="findcard_btn" style={{ height: "65px" }}>
            Find Counselor
            <img src={white_rightarrow} style={{ marginLeft: "-46px" }} />
          </button>
        </div>
        <div style={{ marginLeft: "165px" }}>
          <Swiper {...swiperParams} ref={swiperRef}>
            {data.map((item, index) => (
              <div key={index}>
                <div className="swiper-slide" style={{ marginRight: "30px" }}>
                  <Card style={{ width: "362px", height: "404px" }}>
                    <Card.Body className="findcard_bdy">
                      <div style={{ display: "flex" }}>
                        <div>
                          <Card.Title className="findcard_title">
                            {item.name}
                          </Card.Title>

                          <Card.Subtitle className="findcard_para">
                            {item.para}
                          </Card.Subtitle>
                        </div>
                        <img src={item.img} style={{ marginLeft: "6px" }} />
                      </div>
                      <Card.Text
                        className="findcard_para"
                        style={{ marginTop: "-16px" }}
                      >
                        {item.university}
                        <img src={USAflag} />
                      </Card.Text>
                      <p className="findcard_para">
                        <img
                          src={findcard_star}
                          className="findcard_para_img"
                        />
                        {item.rating}
                      </p>
                      <div style={{ display: "flex" }}>
                        {" "}
                        <h2 className="findcard_price">{item.price}</h2>
                        <span className="findcard_para f_p">
                          {item.pricespan}
                        </span>
                      </div>
                      <div className="find_para_div">
                        <p className="find_para">
                          <img src={btn_arrow} style={{ marginRight: "7px" }} />
                          {item.info}
                        </p>
                      </div>
                      <div className="findcard_footer">
                        <Card.Link href="#" className="findcard_link">
                          View Details
                        </Card.Link>
                        <button className="findcard_btn">Book Session</button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
        <div style={{ marginTop: "20px", display: "flex" }}>
          <button
            className="prev_btn_find"
            onClick={handlePrev}
            disabled={activeSlide === 0}
          >
            <img src={white_prev} alt="Previous" />
          </button>
          <button
            className="prev_btn_find"
            onClick={handleNext}
            disabled={activeSlide === data.length - 1}
          >
            <img src={white_next} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindCounselors;
