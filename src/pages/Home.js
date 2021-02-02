import React, { Component } from "react";
import "../App.css";
import First from "../components/First";
import MainCarousel from "../components/Carousel";
import Package from "../components/Package";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


class Home extends Component {
  render() {
    return (
      <div id='home'>
        <First />
        <MainCarousel/>
        <Package />      
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
