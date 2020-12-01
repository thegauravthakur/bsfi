import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Select from "react-select";
import Footer from "../../../components/Footer";

const Index = () => {
  const storages = [
    {
      name: "Small TV-Units",
      price: "10,000",
      image: "/assets/images/tv-units/small-tv-unit.png",
    },
    {
      name: "Wall Mount TV-Units",
      price: "10,000",
      image: "/assets/images/tv-units/wall-mount-tv-unit.png",
    },

    {
      name: "High TV-Units",
      price: "10,000",
      image: "/assets/images/tv-units/high-tv-unit.png",
    },
    {
      name: "TV Tables",
      price: "10,000",
      image: "/assets/images/tv-units/tv-table.png",
    },
    {
      name: "Large TV Units",
      price: "10,000",
      image: "/assets/images/tv-units/large-tv-unit.png",
    },
    {
      name: "Multipurpose TV Units",
      price: "10,000",
      image: "/assets/images/tv-units/multi-purpose-tv-unit.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        TV Units
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make TV units of numerous varieties. Some of these varieties are
        tabulated below accompanying with their opening rates.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 mb-20">
        {storages.map((storage) => (
          <ProductCard
            name={storage.name}
            price={storage.price}
            image={storage.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
