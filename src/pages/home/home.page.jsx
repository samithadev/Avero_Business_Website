import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IndustrySection from "./components/IndustrySection";
import SolutionSection from "./components/SolutionSection";
import AboutSection from "./components/AboutSection";
import OurworkSection from "./components/OurworkSection";
import BlogSection from "./components/BlogSection";
import CareersSection from "./components/CareersSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <IndustrySection />
      <SolutionSection />
      <AboutSection />
      <OurworkSection />
      <BlogSection />
      <CareersSection />
      <Footer />
    </div>
  );
}
