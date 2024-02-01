import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IndustrySection from "./components/IndustrySection";
import SolutionSection from "./components/SolutionSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <IndustrySection />
      <SolutionSection />
    </div>
  );
}
