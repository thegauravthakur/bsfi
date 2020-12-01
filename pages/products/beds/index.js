import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Select from "react-select";
import Footer from "../../../components/Footer";

const Index = () => {
  const simpleBed = [
    {
      name: "King Size Beds",
      price: "10,000",
      image: "/assets/images/bed/king-size-bed.png",
    },
    {
      name: "Double Beds",
      price: "10,000",
      image: "/assets/images/bed/double-bed.png",
    },
    {
      name: "Beds without Storage",
      price: "10,000",
      image: "/assets/images/bed/bed-without-storage.png",
    },

    {
      name: "Queen Size Beds",
      price: "10,000",
      image: "/assets/images/bed/queen-size-bed.png",
    },
    {
      name: "Double Beds with Storage",
      price: "10,000",
      image: "/assets/images/bed/bed-with-storage.png",
    },
    {
      name: "Single Beds",
      price: "10,000",
      image: "/assets/images/bed/single-bed.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        Beds
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make beds of numerous varieties. Some of these varieties are
        tabulated below accompanying with their opening rates.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 mb-20">
        {simpleBed.map((bed) => (
          <ProductCard name={bed.name} price={bed.price} image={bed.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
