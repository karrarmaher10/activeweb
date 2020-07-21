import React from "react";
import Home from "./../home/Home";
import About from "./../about/About";
import Portfolio from "../portfolio/Portfolio";
import Offer from "./../offer/Offer";
import Us from "./../us/Us";
import Statstic from "./../statstic/Statstic";
import Price from "./../price/Price";
import Testm from "./../testmonial/Testm";
import Team from "./../team/Team";
import Footer from "./../footer/Footer";
const Container = () => {
  return (
    <div>
      <Home />
      <About />
      <Portfolio />
      <Offer />
      <Us />
      <Statstic />
      <Price />
      <Testm />
      <Team />
      <Footer />
    </div>
  );
};
export default Container;
