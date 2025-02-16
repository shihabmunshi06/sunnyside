import { useEffect, useState } from "react";
import testmonyData from "./data/testmonyData";

import "./testmony.scss";
function Testmony() {
  const [imageIndex, setImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handlePrev = () => {
    if (imageIndex != 0) {
      setImageIndex((prev) => (prev -= 1));
    }
  };
  const handleNext = () => {
    switch (true) {
      case windowWidth < 520:
        if (imageIndex < testmonyData.length - 1) {
          setImageIndex((prev) => (prev += 1));
        }
        break;

      case windowWidth < 750 && windowWidth >= 520:
        if (imageIndex < testmonyData.length - 2) {
          setImageIndex((prev) => (prev += 1));
        }
        break;

      default:
        if (imageIndex < testmonyData.length - 3) {
          setImageIndex((prev) => (prev += 1));
        }
        break;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = {
    transform: `translateX(${imageIndex * -100}%)`,
  };

  return (
    <div className="testmony">
      <h2>client testmonials</h2>
      <div className="caraousel">
        <div className="testmony-wrapper">
          {testmonyData.map((e, index) => {
            return (
              <div key={index} className="card" style={style}>
                <div className="content">
                  <div className="img-div">
                    <img src={e.clientImage} alt="" />
                  </div>
                  <p className="comment">{e.comment}</p>
                  <p className="clientName">{e.clientName}</p>
                  <p className="job">{e.job}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </div>
  );
}

export default Testmony;
