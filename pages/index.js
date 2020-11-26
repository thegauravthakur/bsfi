import React, { Fragment } from "react";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import WhatMakesUsUnique from "../components/WhatMakesUsUnique";
import FeaturesSection from "../components/FeaturesSection";
import ContactUsNow from "../components/ContactUsNow";
import Footer from "../components/Footer";

export default () => (
  <Fragment>
    <div className="min-h-screen">
      <AppBar />
      <Header />
    </div>
    <WhatMakesUsUnique />
    <FeaturesSection />
    <ContactUsNow />
    <Footer />
  </Fragment>
);
