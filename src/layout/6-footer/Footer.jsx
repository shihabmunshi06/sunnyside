import Images from "./components/Images";
import Socials from "./components/Socials";
import Nav from "./components/Nav";

import Logo from "../../assets/Logo";

import "./footer.scss";
function Footer() {
  return (
    <footer>
      <Images />
      <div className="footer">
        <div className="logo">
          <Logo />
        </div>
        <Nav />
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
