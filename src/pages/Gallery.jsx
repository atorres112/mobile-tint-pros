import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import CTABanner from "../components/CTABanner.jsx";
import SEO from "../components/SEO.jsx";

function Section({ title, kicker, children }) {
  return (
    <section className="section">
      <div className="container">
        {kicker && <div className="pill">{kicker}</div>}
        {title && <h2 className="h2">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = React.useRef(null);
  const touchStartY = React.useRef(null);
  const touchStartTime = React.useRef(null);

  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  function prev() {
    if (hasPrev) setIndex((current) => current - 1);
  }

  function next() {
    if (hasNext) setIndex((current) => current + 1);
  }

  function onTouchStart(e) {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    touchStartTime.current = Date.now();
  }

  function onTouchEnd(e) {
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    const startTime = touchStartTime.current;

    if (startX == null || startY == null || startTime == null) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    const dt = Date.now() - startTime;

    touchStartX.current = null;
    touchStartY.current = null;
    touchStartTime.current = null;

    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (absX < 50 || absY > absX * 0.7 || dt > 800) return;
    if (dx < 0) next();
    else prev();
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <div className="lightboxOverlay" role="dialog" aria-modal="true">
      <button className="lightboxClose" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      <div className="lightboxInner">
        <div
          className="lightboxStage"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            className="lightboxNav left"
            onClick={prev}
            disabled={!hasPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          <img className="lightboxImage" src={images[index].src} alt={images[index].alt} />

          <button
            className="lightboxNav right"
            onClick={next}
            disabled={!hasNext}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          <div className="lightboxCaption">
            <div style={{ fontWeight: 800 }}>{images[index].title}</div>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>
              {index + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>

      <div className="lightboxThumbs">
        {images.map((img, i) => (
          <button
            key={img.src}
            className={`lightboxThumb ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Open image ${i + 1}`}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>

      <div className="lightboxBackdrop" onClick={onClose} />
    </div>
  );
}

const description =
  "Browse residential, commercial, and automotive tint projects completed by The Mobile Tint Pros in Chicago and surrounding suburbs.";

export default function Gallery() {
  const images = useMemo(
    () => [
      { src: "/gallery/1.png", title: "Escalade full tint and windshield", alt: "Automotive tint on an Escalade" },
      { src: "/gallery/2.png", title: "Jeep Grand Cherokee front match", alt: "Automotive tint on a Jeep Grand Cherokee" },
      { src: "/gallery/3.PNG", title: "Honda Accord window tint", alt: "Automotive window tint on a Honda Accord" },
      { src: "/gallery/4.JPG", title: "Automotive side profile tint", alt: "Automotive tint side profile" },
      { src: "/gallery/5.png", title: "Senior living center film", alt: "Commercial window film on a senior living center" },
      { src: "/gallery/6.jpg", title: "Chrysler 300 tint package", alt: "Automotive tint on a Chrysler 300" },
      { src: "/gallery/7.JPG", title: "SUV tint finish", alt: "Completed SUV tint project" },
      { src: "/gallery/8.PNG", title: "Luxury vehicle tint", alt: "Luxury vehicle with window tint" },
      { src: "/gallery/houseinterior.jpg", title: "Residential glare control", alt: "Residential interior with window film" },
      { src: "/gallery/office.jpg", title: "Commercial office film", alt: "Office windows with commercial film" },
      { src: "/gallery/decofilm.jpg", title: "Decorative privacy film", alt: "Decorative film on interior glass" },
      { src: "/gallery/vinylsigns.jpg", title: "Storefront vinyl graphics", alt: "Commercial window vinyl graphics" },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <SEO
        title="Gallery | The Mobile Tint Pros"
        description={description}
        canonical="/gallery"
        ogImage="/gallery/1.png"
      />

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Project Gallery</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Browse real installs across residential, commercial, and
              automotive projects. Click any photo to view it fullscreen.
            </p>
          </div>
        </div>
      </div>

      <Section title="Our Work" kicker="Gallery">
        <div className="galleryGrid" suppressHydrationWarning>
          {images.map((img, i) => (
            <button
              key={img.src}
              className="galleryItem"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open ${img.title}`}
              type="button"
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="galleryOverlay">
                <div className="galleryTitle">{img.title}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <h3 style={{ marginTop: 0 }}>Need pricing for a similar project?</h3>
          <p className="lead" style={{ marginBottom: 0 }}>
            Send us a few details and photos and we will recommend the right
            film and quote your project.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Block Heat. Add Privacy. Upgrade Your Ride or Property."
        text="Professional window tinting for homes, businesses, and vehicles. Stay cooler, protect interiors, and get a clean finished look."
        buttonText="Get My Free Quote"
        buttonLink="/free-estimate"
        subtitle="Serving Chicago and surrounding suburbs"
      />

      {openIndex !== null && (
        <Lightbox
          images={images}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
