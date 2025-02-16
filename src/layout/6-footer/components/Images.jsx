import { useState, useEffect } from "react";

import imgData from "../data/imgData";

function Images() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="img-wrapper">
      {imgData.map((e, index) => {
        return (
          <div key={index} className="img-div">
            {windowWidth > 375 ? (
              <img src={`./images/desktop/${e.src}`} alt={e.alt} />
            ) : (
              <img src={`./images/mobile/${e.src}`} alt={e.alt} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Images;
