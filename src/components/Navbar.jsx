import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);
    handler();
    if (media.addEventListener) {
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }
    media.addListener(handler);
    return () => media.removeListener(handler);
  }, [query]);

  return matches;
}

function Dropdown({ id, label, children, isMobile, openId, onToggle }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isOpen = isMobile ? openId === id : open;

  useEffect(() => {
    if (isMobile) return undefined;
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

  return (
    <div className="dropdown" ref={ref}>
      <button
        className="navlink"
        onClick={() => {
          if (isMobile) {
            onToggle(isOpen ? null : id);
          } else {
            setOpen(!open);
          }
        }}
        type="button"
      >
        {label} <ChevronDown size={16} />
      </button>

      {isOpen && <div className="menu">{children}</div>}
    </div>
  );
}

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [openId, setOpenId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    if (!isMobile) return;
    setTimeout(() => {
      setMenuOpen(false);
      setOpenId(null);
    }, 0);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img className="logo" src="/logo.png" alt="The Mobile Tint Pros logo" />
          <span>The Mobile Tint Pros</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
          <NavLink className="navlink" to="/" onClick={handleLinkClick}>
            Home
          </NavLink>

          <Dropdown
            id="service-areas"
            label="Service Areas"
            isMobile={isMobile}
            openId={openId}
            onToggle={setOpenId}
          >
            <Link to="/chicago" onClick={handleLinkClick}>Chicago, IL</Link>
            <Link to="/suburbs" onClick={handleLinkClick}>Chicago Suburbs</Link>
          </Dropdown>

          <Dropdown
            id="services"
            label="Services"
            isMobile={isMobile}
            openId={openId}
            onToggle={setOpenId}
          >
            <Link to="/services/residential" onClick={handleLinkClick}>Residential</Link>
            <Link to="/services/commercial" onClick={handleLinkClick}>Commercial</Link>
            <Link to="/services/automotive" onClick={handleLinkClick}>Automotive</Link>
          </Dropdown>

          <NavLink className="navlink" to="/gallery" onClick={handleLinkClick}>
            Gallery
          </NavLink>

          <NavLink className="navlink" to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>

          <NavLink className="navlink" to="/faq" onClick={handleLinkClick}>
            FAQ
          </NavLink>

          <NavLink className="navlink" to="/blog" onClick={handleLinkClick}>
            Blog
          </NavLink>

          <Link className="btn nav-cta" to="/contact" onClick={handleLinkClick}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
