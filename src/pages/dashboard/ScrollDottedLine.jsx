// import React, { useEffect, useState } from "react";
// import "./dashboard.css";

// const ScrollDottedLine = () => {
//   const [scrollRatio, setScrollRatio] = useState(0);

//   useEffect(() => {
//     const updateScrollRatio = () => {
//       const scrolled = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const contentHeight = document.documentElement.scrollHeight;
//       const newScrollRatio = Math.min(
//         scrolled / (contentHeight - windowHeight),
//         1
//       );
//       setScrollRatio(newScrollRatio);
//     };

//     window.addEventListener("scroll", updateScrollRatio);
//     updateScrollRatio(); // Initialize scrollRatio
//     return () => {
//       window.removeEventListener("scroll", updateScrollRatio);
//     };
//   }, []);

//   return (
//     <div className="scroll-dotted-line-container">
//       <div className="line">
//         <div className="fill" style={{ height: `${scrollRatio * 300}%` }}></div>
//         <div
//           className="dotted-line"
//           style={{ height: `${(1 - scrollRatio) * 100}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default ScrollDottedLine;

import React, { useEffect, useState } from "react";
import "./dashboard.css";

const ScrollDottedLine = () => {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const updateScrollRatio = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;
      const newScrollRatio = Math.min(
        scrolled / (contentHeight - windowHeight),
        1
      );
      setScrollRatio(newScrollRatio);
    };

    window.addEventListener("scroll", updateScrollRatio);
    updateScrollRatio(); // Initialize scrollRatio
    return () => {
      window.removeEventListener("scroll", updateScrollRatio);
    };
  }, []);

  return (
    <div className="scroll-dotted-line-container">
      <div className="line">
        <div className="fill" style={{ height: `${scrollRatio * 300}%` }}>
          <div className="arrow"></div>
        </div>
        <div
          className="dotted-line"
          style={{ height: `${(1 - scrollRatio) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollDottedLine;
