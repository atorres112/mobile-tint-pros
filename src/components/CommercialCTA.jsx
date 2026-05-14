import React from "react";
import { Link } from "react-router-dom";

export default function CommercialCTA({
  title = "Get a Free Consultation for Your Business",
  text = "Need privacy film, solar control, decorative film, or security film for your business? Tell us about the space and we will recommend the right solution.",
  buttonText = "Get a Free Estimate",
  buttonLink = "/free-estimate",
  image = "/gallery/office.jpg",
  imageAlt = "Commercial window film consultation",
}) {
  return (
    <section className="residentialCta">
      <div className="container">
        <div className="residentialCtaCard">
          <div className="residentialCtaImage">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
          <div className="residentialCtaContent">
            <div className="pill">Commercial Window Film</div>
            <h2 className="h2" style={{ marginTop: 12 }}>
              {title}
            </h2>
            <p className="lead">{text}</p>
            {buttonLink.startsWith("http") ? (
              <a className="btn" href={buttonLink}>
                {buttonText}
              </a>
            ) : (
              <Link className="btn" to={buttonLink}>
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
