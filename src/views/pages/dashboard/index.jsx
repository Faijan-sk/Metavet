import React from "react";

import HeroSection from "../../components/dashboard/HeroSection";
import Div2 from "../../components/dashboard/Div2";
import Div3 from "../../components/dashboard/Div3";
import Div4 from "../../components/dashboard/Div4";
import DoctorCarousel from "../../components/card/DoctorCarousel";
import DoctorCarousel2 from "../../components/card/DoctorCarousel2";
import DoctorCarousel3 from "../../components/card/DoctorCarousel3";
import Footer from "../../components/dashboard/Footer";
import DoctorCarousel4 from "../../components/card/DoctorCarousel4";
import ClientReview from "../../components/card/ClientReview";
import ClientReview2 from "../../components/card/ClientReview2";
import ClientReview3 from "../../components/card/ClientReview3";
import DoctorCarousel5 from "../../components/card/DoctorCarousel5";
import DoctorCarousel6 from "../../components/card/DoctorCarousel6";
import DoctorCarousel7 from "../../components/card/DoctorCarousel7";
import DoctorCarousel8 from "../../components/card/DoctorCarousel8";
import ClientReview4 from "../../components/card/ClientReview4";
import DoctorCarousel9 from "../../components/card/DoctorCarousel9";
// import Demobutton from "../../components/dashboard/Demobutton";

const index = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <Div2 />
      <Div3 />
      <Div4 />
      <DoctorCarousel />
      <DoctorCarousel2 />
      <DoctorCarousel3 />
      <DoctorCarousel4 />
      <DoctorCarousel5 />
      <DoctorCarousel6 />
      <DoctorCarousel7 />
      <DoctorCarousel8 />
      <DoctorCarousel9 />
      <ClientReview />
      <ClientReview2 />
      <ClientReview3 />
      <ClientReview4 />
      {/* <Demobutton /> */}
      <Footer />
    </div>
  );
};

export default index;
