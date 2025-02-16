import "./about2.scss";

export default function About2() {
  return (
    <div className="about two">
      <div className="text-div">
        <div className="text">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a
            href="stand-out"
            aria-label="learn more about how we make you stand out to the right audience"
          >
            learn more
          </a>
        </div>
      </div>

      <div className="img-div">
        <img src="./images/desktop/image-stand-out.jpg" alt="" />
      </div>
    </div>
  );
}
