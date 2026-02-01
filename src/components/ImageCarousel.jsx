import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({
  images = [],
  autoPlayMs = 4000,
  height = 340,
}) {
  const [index, setIndex] = useState(0);

  // Swipe refs
  const startX = useRef(null);
  const startY = useRef(null);
  const startTime = useRef(null);

  const count = images.length;

  const safeIndex = useMemo(() => {
    if (count === 0) return 0;
    return Math.max(0, Math.min(index, count - 1));
  }, [index, count]);

  useEffect(() => {
    setIndex(safeIndex);
  }, [safeIndex]);

  function prev() {
    if (count === 0) return;
    setIndex((i) => (i - 1 + count) % count);
  }

  function next() {
    if (count === 0) return;
    setIndex((i) => (i + 1) % count);
  }

  // Autoplay
  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => {
      next();
    }, autoPlayMs);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, autoPlayMs]);

  // Touch swipe
  function onTouchStart(e) {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    startTime.current = Date.now();
  }

  function onTouchEnd(e) {
    const sx = startX.current;
    const sy = startY.current;
    const st = startTime.current;
    if (sx == null || sy == null || st == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;
    const dt = Date.now() - st;

    startX.current = null;
    startY.current = null;
    startTime.current = null;

    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (count <= 1) return;
    if (absX < 50) return;
    if (absY > absX * 0.7) return;
    if (dt > 900) return;

    if (dx < 0) next();
    else prev();
  }

  if (count === 0) return null;

  return (
    <div
      className="carousel"
      style={{ height }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Image carousel"
    >
      {/* Images */}
      <div className="carouselTrack" style={{ transform: `translateX(-${safeIndex * 100}%)` }}>
        {images.map((img) => (
          <div className="carouselSlide" key={img.src}>
            <img className="carouselImg" src={img.src} alt={img.alt || "carousel image"} />
            <div className="carouselShade" />
            {(img.title || img.subtitle) && (
              <div className="carouselText">
                {img.title && <div className="carouselTitle">{img.title}</div>}
                {img.subtitle && <div className="carouselSub">{img.subtitle}</div>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {count > 1 && (
        <>
          <button className="carouselBtn left" onClick={prev} aria-label="Previous slide" type="button">
            <ChevronLeft size={22} />
          </button>
          <button className="carouselBtn right" onClick={next} aria-label="Next slide" type="button">
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Dots */}
      {count > 1 && (
        <div className="carouselDots" role="tablist" aria-label="Carousel dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carouselDot ${i === safeIndex ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
