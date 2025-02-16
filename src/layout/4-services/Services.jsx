import "./services.scss";

function Services({ ref }) {
  return (
    <div ref={ref} className="services">
      <div className="left">
        <div className="text">
          <h2>Graphic design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="text">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
