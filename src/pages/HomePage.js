import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Project from "../components/Project";
import Skills from "../components/Skills";
import ContactUs from "../components/ContactUs";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
  const {theme} = useTheme();
  return (
    <div className="min-h-screen scroll-smooth font-serif w-full ">
      <Header />
      <Hero />
      <About />
      <Skills theme={theme} />
      <Journey />
      <Project />
      <ContactUs />
    </div>
  );
};

export default HomePage;