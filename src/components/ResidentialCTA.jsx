import React from "react";
import { Link } from "react-router-dom";

export default function ResidentialCTA({
  title = "Get a Free Consultation for Your Home",
  text = "Interested in reducing heat, glare, or daytime visibility in your home? Tell us about your windows and we will recommend the right film for comfort, privacy, and UV protection.",
  buttonText = "Get a Free Estimate",
  buttonLink = "/free-estimate",
  image = "/gallery/tinted-house-windows.jpg",
  imageAlt = "Residential window tint consultation",
}) {
  return (
    <section className="residentialCta">
      <div className="container">
        <div className="residentialCtaCard">
          <div className="residentialCtaImage">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
          <div className="residentialCtaContent">
            <div className="pill">Residential Tinting</div>
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
