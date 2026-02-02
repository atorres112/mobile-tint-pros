import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import CTABanner from "../components/CTABanner.jsx";

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

  // Swipe tracking
  const touchStartX = React.useRef(null);
  const touchStartY = React.useRef(null);
  const touchStartTime = React.useRef(null);

  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  function prev() {
    if (hasPrev) setIndex((i) => i - 1);
  }

  function next() {
    if (hasNext) setIndex((i) => i + 1);
  }

  function onTouchStart(e) {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    touchStartTime.current = Date.now();
  }

  function onTouchMove(e) {
    // Optional: prevent the page from scrolling while swiping the image
    // e.preventDefault();
  }

  function onTouchEnd(e) {
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    const startTime = touchStartTime.current;

    if (startX == null || startY == null || startTime == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    const dt = Date.now() - startTime;

    // Reset refs
    touchStartX.current = null;
    touchStartY.current = null;
    touchStartTime.current = null;

    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    // thresholds
    if (absX < 50) return;           // not far enough
    if (absY > absX * 0.7) return;   // too vertical
    if (dt > 800) return;            // too slow

    if (dx < 0) {
      // swipe left => next
      next();
    } else {
      // swipe right => prev
      prev();
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="lightboxOverlay" role="dialog" aria-modal="true">
      <button className="lightboxClose" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      <div className="lightboxInner">
        {/* Stage now contains arrows (better mobile) */}
        <div
          className="lightboxStage"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
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

          <img
            className="lightboxImage"
            src={images[index].src}
            alt={images[index].alt}
          />

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

      {/* Click outside to close */}
      <div className="lightboxBackdrop" onClick={onClose} />
    </div>
  );
}


export default function Gallery() {
  // ✅ Edit this list anytime — add/remove images here.
  // Assumes images live in: /public/gallery/
  const images = useMemo(
    () => [
      { src: "/gallery/1.png", title: "Escalade Full Tint + Windshield", alt: "Vehicle Tint" },
      { src: "/gallery/2.png", title: "JEEP G.C. Front Two Match (20%)", alt: "Vehicle Tint" },
      { src: "/gallery/3.PNG", title: "Honda Accord Window Tint (20%)", alt: "Window film project 3" },
      { src: "/gallery/4.JPG", title: "Automotive Window Tint", alt: "Vehicle Tint" },
      { src: "/gallery/5.png", title: "Senior Living Center Tint", alt: "Commercial Window Tint" },
      { src: "/gallery/6.jpg", title: "Chrysler 300 Window Tint (5%)", alt: "Window film project 6" },
      { src: "/gallery/7.JPG", title: "Project 7", alt: "Window film project 7" },
      { src: "/gallery/8.PNG", title: "Project 8", alt: "Window film project 8" },
      { src: "/gallery/9.jpg", title: "Project 9", alt: "Window film project 9" },
      { src: "/gallery/10.jpg", title: "Project 10", alt: "Window film project 10" },
      { src: "/gallery/11.jpg", title: "Project 11", alt: "Window film project 11" },
      { src: "/gallery/12.jpg", title: "Project 12", alt: "Window film project 12" },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Project Gallery</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Browse real installs. Click any photo to view fullscreen and swipe through the set.
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
          <h3 style={{ marginTop: 0 }}>Add more photos</h3>
          <p className="lead" style={{ marginBottom: 0 }}>
            Drop images into <code>public/gallery/</code> and add them to the list in{" "}
            <code>src/pages/Gallery.jsx</code>.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Block Heat. Add Privacy. Upgrade Your Ride or Home."
        text="Professional window tinting for homes, businesses, and vehicles. Stay cooler, protect interiors, and look better — installed by pros."
        buttonText="🔥 Get My Free Quote"
        buttonLink="/free-estimate"
        subtitle="Serving Chicago and surrounding areas"
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
