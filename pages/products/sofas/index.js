import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Footer from "../../../components/Footer";

const Index = () => {
  const sofas = [
    {
      name: "Sofas",
      price: "10,000",
      image: "/assets/images/sofa/sofa.png",
    },
    {
      name: "Divans",
      price: "10,000",
      image: "/assets/images/sofa/divan.png",
    },
    {
      name: "L-Shaped Sofas",
      price: "10,000",
      image: "/assets/images/sofa/l-shaped-sofa.png",
    },
    {
      name: "Lounges",
      price: "10,000",
      image: "/assets/images/sofa/lounge.png",
    },
    {
      name: "Settee Sofas",
      price: "10,000",
      image: "/assets/images/sofa/settee-sofa.png",
    },
    {
      name: "Classic Settees",
      price: "10,000",
      image: "/assets/images/sofa/classic-settee.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        Sofas
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make Sofas of numerous varieties. Some of these varieties are
        tabulated below accompanying with their opening rates.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 mb-20 md:gap-y-8 lg:gap-y-12">
        {sofas.map((sofa) => (
          <ProductCard name={sofa.name} price={sofa.price} image={sofa.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
