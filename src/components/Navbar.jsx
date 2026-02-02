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
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        if (isMobile) {
          onToggle(null);
        } else {
          setOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, onToggle]);

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

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img className="logo" src="/logo.png" alt="The Mobile Tint Pros logo" />
          <span>The Mobile Tint Pros</span>
        </Link>

        <nav className="navlinks">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>

          <Dropdown
            id="service-areas"
            label="Service Areas"
            isMobile={isMobile}
            openId={openId}
            onToggle={setOpenId}
          >
            <Link to="/chicago">Chicago, IL</Link>
            <Link to="/suburbs">Chicago Suburbs</Link>
          </Dropdown>

          <Dropdown
            id="services"
            label="Services"
            isMobile={isMobile}
            openId={openId}
            onToggle={setOpenId}
          >
            <Link to="/services/residential">Residential</Link>
            <Link to="/services/commercial">Commercial</Link>
            <Link to="/services/automotive">Automotive</Link>
          </Dropdown>

          <NavLink className="navlink" to="/gallery">
            Gallery
          </NavLink>

          <NavLink className="navlink" to="/contact">
            Contact
          </NavLink>

          <NavLink className="navlink" to="/faq">
            FAQ
          </NavLink>

          <NavLink className="navlink" to="/blog">
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
