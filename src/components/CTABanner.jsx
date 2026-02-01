import React from "react";
import { Link } from "react-router-dom";

export default function CTABanner({
  title = "LET'S DISCUSS YOUR WINDOW FILM SOLUTION",
  text = "We take the extra steps to make sure each project is done the right way - from preparation to final installation. Quality, longevity, and attention to detail set us apart.",
  buttonText = "GET A FREE ESTIMATE",
  buttonLink = "/contact",
  image = "/gallery/1.png",
  subtitle = "HOUSTON AND SURROUNDING AREA",
  logoSrc = "/logo.png",
}) {
  return (
    <section className="ctaSection">
      <div className="ctaContainer">
        {/* Left Content */}
        <div className="ctaContent">
          <img
            src={logoSrc}
            alt="The Mobile Tint Pros logo"
            className="ctaLogo"
          />

          <h2 className="ctaTitle">{title}</h2>

          <p className="ctaText">{text}</p>

          <p className="ctaLocation">{subtitle}</p>

          {buttonLink.startsWith("http") ? (
            <a href={buttonLink} className="ctaButton">
              {buttonText}
            </a>
          ) : (
            <Link to={buttonLink} className="ctaButton">
              {buttonText}
            </Link>
          )}

          <div className="ctaNote">
            <div>{"\u{1F6E0}\uFE0F"} Serving Chicago &amp; Surrounding Areas</div>
            <div>{"\u23F1\uFE0F"} Same-day or next-day service available</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="ctaImageWrap">
          <img src={image} alt="Window film installation" />
          <div className="ctaImageOverlay">
            Professional Install - Lifetime Film Warranty
          </div>
        </div>
      </div>
    </section>
  );
}
