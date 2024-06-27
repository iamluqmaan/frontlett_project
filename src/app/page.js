"use client";

import Builders from "./components/Builders";
import Hero from "./components/Hero";
import Header from "./components/Header";
import FocusArea from "./components/FocusArea";
import ConceptInnovations from "./components/ConceptInnovations";
import ServiceIncubationModel from "./components/ServiceIncubationModel";
import Hypothesis from "./components/Hypothesis";
import CaseStudy from "./components/CaseStudy";
import StudioPortfolio from "./components/StudioPortfolio";
import EIRProgram from "./components/EIRprogram";
import EquityJobs from "./components/Equity";
import InvestorsNetwork from "./components/InvestorNetwork";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import CoFoundWithUs from "./components/CoFound";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Builders />
      <FocusArea/>
      <ConceptInnovations/>
      <ServiceIncubationModel />
      <Hypothesis />
      <CaseStudy/>
      <StudioPortfolio/>
      <CoFoundWithUs/>
      <EIRProgram/>
      <InvestorsNetwork/>
      <EquityJobs/>
      <Blog />
      <Footer/>
      
    </div>
  );
}
