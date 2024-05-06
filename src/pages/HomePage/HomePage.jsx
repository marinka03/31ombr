import React from "react";
import MainSection from "../../components/MainSection/MainSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import OurValues from "../../components/OurValues/OurValues";
import aboutUsData from "../../aboutUs.json";
import ourValues from "../../ourValues.json";
import Vacancy from "../../components/Vacancy/Vacancy";
import Contacts from "../../components/Contacts";
import vacancyData from "../../vacancy.json";
import Gallery from "../../components/Gallery/Gallery";

function HomePage() {
  return (
    <>
      <MainSection />
      <AboutUs aboutUsData={aboutUsData} />
      <OurValues ourValuesData={ourValues} />
      <Vacancy vacancyData={vacancyData} />
      <Gallery/>
      <Contacts />
      <Footer />
    </>
  );
}

export default HomePage;
