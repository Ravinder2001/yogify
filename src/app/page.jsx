import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Landing from "../components/Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import { MarqueeDemo } from "../components/Reviews/Review";
import Teachers from "../components/Teachers/Teachers";
import Timings from "../components/Timings/Timings";
import Tutorials from "../components/Tutorials/Tutorials";


function page() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Tutorials />
      <Timings/>
      <AboutUs/>
      <Teachers/>
      <MarqueeDemo/>
      <ContactUs/>
    </div>
  );
}

export default page;
