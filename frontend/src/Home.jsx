import React from "react";
import PageNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ourexpertise from "./components/Ourexpertise";
import Partnership from "./components/Partnership";
import Advantage from "./components/Advantage";
import Companyscarousel from "./components/Companyscarousel";
import Footer from "./components/Footer";
import Contactform from "./components/Contactform";

const Home = () => {
  return (
    <>
      <PageNavbar />

      <Hero />

      <Companyscarousel />

      <Ourexpertise />

      <Partnership />

      <Advantage />

      <Contactform />

      <Footer />
    </>
  );
};

export default Home;
