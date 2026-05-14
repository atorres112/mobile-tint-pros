import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import Residential from "./pages/Residential.jsx";
import Chicago from "./pages/Chicago.jsx";
import ChicagoSuburbs from "./pages/Chicago-Suburbs.jsx";
import Commercial from "./pages/Commercial.jsx";
import AutomotiveTint from "./pages/AutomotiveTint.jsx";
import Gallery from "./pages/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import FreeEstimate from "./pages/FreeEstimate.jsx";
import FAQ from "./pages/FAQ.jsx";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import ServiceAreas from "./pages/ServiceAreas.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/services/commercial" element={<Commercial />} />
        <Route path="/services/residential" element={<Residential />} />
        <Route path="/services/automotive-tint" element={<AutomotiveTint />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/free-estimate" element={<FreeEstimate />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/chicago-suburbs" element={<ChicagoSuburbs />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

