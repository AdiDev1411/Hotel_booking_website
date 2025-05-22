import React, { Component } from "react";
import Nav from "./assets/components/Nav";
import IMAGESSLIDERS from "./assets/components/imahesl";
import Contact from "./assets/components/ContactUs";
import Aboutus from "./assets/components/AboutUs";
import Rooms from "./assets/components/Rooms";
import Footer from "./assets/components/Footer";
import Facilities from "./assets/components/Facilities";
function Mainpage() {
  return (
    <>
      <Nav />

      <section id="home-section">

      <IMAGESSLIDERS />
      </section>
      <section id="rooms-section">
        <Rooms />
      </section>
      <Facilities />

      <section id="aboutus-section">
        <Aboutus />
      </section>

      <section id="contact-section">
      <Contact />


      </section>
      <Footer />
    </>
  );
}
export default Mainpage;
