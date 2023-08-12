// // import React, { useRef, useState } from "react";
// // import Swiper from "react-id-swiper";
// // import "swiper/css";
// // import "./crousels.css";
// // import righticon from "../../images/righticon.png";
// // import lefticon from "../../images/lefticon.png";

// // const VideoSlider = () => {
// //   const videos = [
// //     "video2.mp4",
// //     "video3.mp4",
// //     "video4.mp4",
// //     "video5.mp4",
// //     "video6.mp4",
// //     "video7.mp4",
// //     "video8.mp4",
// //     "video9.mp4",
// //     "video10.mp4",
// //   ];

// //   const [activeSlide, setActiveSlide] = useState(0);
// //   const swiperRef = useRef(null);

// //   const handleNext = () => {
// //     if (swiperRef.current && swiperRef.current.swiper) {
// //       swiperRef.current.swiper.slideNext();
// //       setActiveSlide((prevSlide) => (prevSlide + 1) % videos.length);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (swiperRef.current && swiperRef.current.swiper) {
// //       swiperRef.current.swiper.slidePrev();
// //       setActiveSlide(
// //         (prevSlide) => (prevSlide - 1 + videos.length) % videos.length
// //       );
// //     }
// //   };

// //   const swiperParams = {
// //     spaceBetween: 30,
// //     slidesPerView: 4,
// //     centeredSlides: true,
// //     // navigation: {
// //     //   nextEl: ".swiper-button-next",
// //     //   prevEl: ".swiper-button-prev",
// //     // },
// //     allowTouchMove: false, // Disable manual scrolling
// //   };

// //   return (
// //     <div className="video-slider">
// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           marginBottom: "45px",
// //           marginTop: "75px",
// //         }}
// //       >
// //         <div style={{ marginLeft: "30px" }}>
// //           <h6 className="sucess_title">Success Stories</h6>
// //           <h2 className="success_head">Result Speak The Loudest</h2>
// //         </div>
// //         <div style={{ marginTop: "20px", marginRight: "23px" }}>
// //           <button className="swiper-button-prev" onClick={handlePrev}>
// //             <img src={lefticon} alt="Previous" />
// //           </button>
// //           <button className="swiper-button-next" onClick={handleNext}>
// //             <img src={righticon} alt="Next" />
// //           </button>
// //         </div>
// //       </div>
// //       <Swiper {...swiperParams} ref={swiperRef}>
// //         {videos.map((video, index) => (
// //           <div key={index}>
// //             <video
// //               src={`${process.env.PUBLIC_URL}/videos/${video}`}
// //               className={`swiper-slide ${
// //                 index === activeSlide ? "active-slide" : "video-slide"
// //               }`}
// //               controls
// //               muted
// //             >
// //               Your browser does not support the video tag.
// //             </video>
// //           </div>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default VideoSlider;
// import React, { useRef, useState } from "react";
// import Swiper from "react-id-swiper";
// import "swiper/css";
// import "./crousels.css";
// import righticon from "../../images/righticon.png";
// import lefticon from "../../images/lefticon.png";
// import crousel1 from "../../images/crousel1.png";
// import crousel2 from "../../images/crousel2.png";
// import crousel3 from "../../images/crousel3.png";
// import crousel4 from "../../images/crousel4.png";
// import mobile_dot from "../../images/mobile_dot.png";

// const VideoSlider = () => {
//   const images = [
//     crousel1,
//     crousel2,
//     crousel3,
//     crousel4,
//     crousel1,
//     crousel2,
//     crousel3,
//     crousel4,
//   ];

//   const [activeSlide, setActiveSlide] = useState(0);
//   const swiperRef = useRef(null);

//   const handleNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//       setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }
//   };

//   const handlePrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//       setActiveSlide(
//         (prevSlide) => (prevSlide - 1 + images.length) % images.length
//       );
//     }
//   };

//   const swiperParams = {
//     spaceBetween: -20,
//     slidesPerView: 4,
//     centeredSlides: true,
//     allowTouchMove: false, // Disable manual scrolling
//   };

//   return (
//     <div className="image-slider">
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: "45px",
//           marginTop: "75px",
//         }}
//       >
//         <div>
//           <h6 className="sucess_title">Success Stories</h6>
//           <h2 className="success_head">Result Speak The Loudest</h2>
//         </div>
//         <div style={{ marginTop: "20px", marginRight: "23px" }}>
//           <button className="swiper-button-prev" onClick={handlePrev}>
//             <img src={lefticon} alt="Previous" />
//           </button>
//           <button className="swiper-button-next" onClick={handleNext}>
//             <img src={righticon} alt="Next" />
//           </button>
//         </div>
//       </div>
//       <Swiper {...swiperParams} ref={swiperRef}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <div
//               className={`swiper-slide ${
//                 index === activeSlide ? "active-slide" : "image-slide"
//               }`}
//             >
//               {index === activeSlide && (
//                 <img src={mobile_dot} className="mobile_img" />
//               )}
//               <img
//                 src={image}
//                 className="success_img"
//                 alt={`Image ${index + 1}`}
//               />
//             </div>
//           </div>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoSlider;

import React, { useRef, useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css";
import "./crousels.css";
import righticon from "../../images/righticon.png";
import lefticon from "../../images/lefticon.png";
import crousel1 from "../../images/crousel1.png";
import crousel2 from "../../images/crousel2.png";
import crousel3 from "../../images/crousel3.png";
import crousel4 from "../../images/crousel4.png";
import mobile_dot from "../../images/mobile_dot.png";

const VideoSlider = () => {
  const images = [
    crousel1,
    crousel2,
    crousel3,
    crousel4,
    crousel1,
    crousel2,
    crousel3,
    crousel4,
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      setActiveSlide(
        (prevSlide) => (prevSlide - 1 + images.length) % images.length
      );
    }
  };

  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: true,
    allowTouchMove: false, // Disable manual scrolling
  };

  return (
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
          <h6 className="sucess_title">Success Stories</h6>
          <h2 className="success_head">Result Speak The Loudest</h2>
        </div>
        <div style={{ marginTop: "20px", marginRight: "23px" }}>
          <button
            className="swiper-button-prev"
            onClick={handlePrev}
            disabled={activeSlide === 0}
          >
            <img src={lefticon} alt="Previous" />
          </button>
          <button
            className="swiper-button-next"
            onClick={handleNext}
            disabled={activeSlide === images.length - 1}
          >
            <img src={righticon} alt="Next" />
          </button>
        </div>
      </div>
      <Swiper {...swiperParams} ref={swiperRef}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className={`swiper-slide ${
                index === activeSlide ? "active-slide" : "image-slide"
              }`}
            >
              {index === activeSlide && (
                <img src={mobile_dot} className="mobile_img" />
              )}
              <img
                src={image}
                className="success_img"
                alt={`Image ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSlider;
