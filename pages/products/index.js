import React, { Fragment } from "react";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import ProductsIconGroup from "../../components/ProductsIconGroup";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <div className="py-10 flex-1">
        <h1 className="text-4xl font-bold text-center text-blue-700 px-1 sm:px-0 ">
          Explore Our Products
        </h1>
        <p className="text-lg mt-3 text-gray-600 max-w-md mx-auto text-center px-1 sm:px-0 ">
          All products listed here are handmade by our adept craftsmen.
        </p>
        <ProductsIconGroup />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
