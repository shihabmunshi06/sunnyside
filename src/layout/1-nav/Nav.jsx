import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";

import Logo from "../../assets/Logo";
import Menu from "../../assets/Menu";

import "./nav.scss";
function Nav() {
  const topWrapperRef = useRef(null);

  const [navWidth, setNavWidth] = useState("auto");
  const [navIsActive, setNavIsActive] = useState(false);

  const updateNavWidth = () => {
    if (window.innerWidth < 850 && topWrapperRef.current) {
      const element = topWrapperRef.current;
      const computedStyle = window.getComputedStyle(element);
      const paddingLeft = parseFloat(computedStyle.paddingLeft);
      const paddingRight = parseFloat(computedStyle.paddingRight);

      const widthExcludingPadding =
        element.clientWidth - paddingLeft - paddingRight;

      setNavWidth(widthExcludingPadding);
    } else {
      setNavWidth("auto");
    }
  };

  useEffect(() => {
    updateNavWidth();

    window.addEventListener("resize", updateNavWidth);

    return () => {
      window.removeEventListener("resize", updateNavWidth);
    };
  }, []);

  const handleClick = () => {
    setNavIsActive((prev) => !prev);
  };

  return (
    <>
      <div className="top">
        <div ref={topWrapperRef} className="top-wrapper">
          <div className="bg-1"></div>
          <div className="bg-2"></div>

          <div className="logo">
            <Logo />
          </div>

          <div className="right-side">
            <nav
              className={`${navIsActive ? "active" : ""}`}
              style={{ width: navWidth }}
            >
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                {window.innerWidth < 850 && (
                  <li>
                    <div className="contact">
                      <a href="/">contact</a>
                    </div>
                  </li>
                )}
              </ul>
            </nav>
            {window.innerWidth < 850 ? (
              <div onClick={handleClick} className="menu">
                <Menu />
              </div>
            ) : (
              <div className="contact">
                <a href="/">contact</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
