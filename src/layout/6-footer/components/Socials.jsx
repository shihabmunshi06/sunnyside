import { Link } from "react-router";

import FacebookIcon from "../../../assets/Facebook";
import InstagramIcon from "../../../assets/Instagram";
import PinterestIcon from "../../../assets/Pinterest";
import TwitterIcon from "../../../assets/Twitter";

const socialData = [
  {
    socialName: "Facebook",
    component: <FacebookIcon />,
    url: "https://www.facebook.com",
  },

  {
    socialName: "Instagram",
    component: <InstagramIcon />,
    url: "https://www.instagram.com",
  },

  {
    socialName: "Pinterest",
    component: <PinterestIcon />,
    url: "https://www.pinterest.com",
  },

  {
    socialName: "Twitter",
    component: <TwitterIcon />,
    url: "https://www.twitter.com",
  },
];

function Socials() {
  return (
    <div className="socials">
      {socialData.map((e, index) => {
        return (
          <Link to={e.url} key={index}>
            {e.component}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
