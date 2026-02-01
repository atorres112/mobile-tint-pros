import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button
        className="navlink"
        onClick={() => setOpen(!open)}
        type="button"
      >
        {label} <ChevronDown size={16} />
      </button>

      {open && <div className="menu">{children}</div>}
    </div>
  );
}

export default function Navbar() {
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

          <Dropdown label="Service Areas">
            <Link to="/service-areas">All Service Areas</Link>
            <Link to="/chicago">Chicago, IL</Link>
            <Link to="/suburbs">Schaumburg, IL</Link>
          </Dropdown>

          <Dropdown label="Services">
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
