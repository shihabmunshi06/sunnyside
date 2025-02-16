import "./about1.scss";

export default function About1() {
  return (
    <div className="about one">
      <div className="text-div">
        <div className="text">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="transform" aria-label="learn more about how we transform your brand">
            learn more
          </a>
        </div>
      </div>

      <div className="img-div">
        <img src="./images/desktop/image-transform.jpg" alt="" />
      </div>
    </div>
  );
}
