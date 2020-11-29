import React, { Fragment } from "react";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import WhatMakesUsUnique from "../components/WhatMakesUsUnique";
import FeaturesSection from "../components/FeaturesSection";
import ContactUsNow from "../components/ContactUsNow";
import Footer from "../components/Footer";
import ProductCategorySection from "../components/ProductCategorySection";
import OutObjectives from "../components/OutObjectives";

export default () => (
  <Fragment>
    <AppBar />
    <Header />
    <ProductCategorySection />
    <FeaturesSection />
    <WhatMakesUsUnique />
    <OutObjectives />
    <ContactUsNow />
    <Footer />
  </Fragment>
);
