import { useEffect, useRef } from "react";

import Homepage from "./layout/2-home/Homepage";
import About1 from "./layout/3-about/about1/About1";
import About2 from "./layout/3-about/about2/About2";
import Services from "./layout/4-services/Services";
import Testmony from "./layout/5-testmony/Testmony";
import Footer from "./layout/6-footer/Footer";

function App() {
  const mainContentRef = useRef(null);
  const servicesRef = useRef(null);

  const adjustContentHeight = (height) => {
    if (mainContentRef.current) {
      const mainChildren = mainContentRef.current.children;

      for (let i of mainChildren) {
        i.style.height = height;
      }
    }
  };

  const adjustServicesHeight = (height, navHeight) => {
    if (window.innerWidth < 750) {
      const servicesChildren = servicesRef.current.children;
      const childCount = servicesChildren.length;

      servicesRef.current.style.height = `calc((100vh - ${navHeight}px + 1rem) * ${childCount})`

      for (let i of servicesChildren) {
        i.style.height = height;
      }
    }
  };

  const handleResize = () => {
    const navHeight = document.querySelector(".top-wrapper").offsetHeight;
    const availableHeight = `calc(100vh - ${navHeight}px + 1rem)`;

    adjustContentHeight(availableHeight);
    adjustServicesHeight(availableHeight, navHeight);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main ref={mainContentRef}>
      <Homepage />
      <About1 />
      <About2 />
      <Services ref={servicesRef} />
      <Testmony />
      <Footer />
    </main>
  );
}

export default App;
