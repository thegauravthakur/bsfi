import React, { Fragment } from "react";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import WhatMakesUsUnique from "../components/WhatMakesUsUnique";
import FeaturesSection from "../components/FeaturesSection";
import ContactUsNow from "../components/ContactUsNow";
import Footer from "../components/Footer";
import ProductCategorySection from "../components/ProductCategorySection";
import OutObjectives from "../components/OutObjectives";
import Head from "next/head";

export default () => (
  <Fragment>
    <Head>
      <title>Bhaga Sidh Furniture Industry: Buy Best Furniture in Kullu </title>
      <meta
        name="description"
        content="Bhaga Sidh Furniture Industry is one of the best places in Kullu to buy furniture. We have more than 20 years of professional expertise in the market for furniture"
      />
    </Head>
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
