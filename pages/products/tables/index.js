import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Select from "react-select";
import Footer from "../../../components/Footer";

const Index = () => {
  const tables = [
    {
      name: "Dining Table",
      price: "10,000",
      image: "/assets/images/tables/dining-table.png",
    },
    {
      name: "Dressing Table",
      price: "10,000",
      image: "/assets/images/tables/dressing-table.png",
    },
    {
      name: "Bed-Side Table",
      price: "10,000",
      image: "/assets/images/tables/bed-side-table.png",
    },
    {
      name: "Coffee Table",
      price: "10,000",
      image: "/assets/images/tables/coffee-table.png",
    },
    {
      name: "Console Table",
      price: "10,000",
      image: "/assets/images/tv-units/tv-table.png",
    },

    {
      name: "Computer Table",
      price: "10,000",
      image: "/assets/images/tables/computer-table.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        Tables
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make tables of numerous varieties. Some of these varieties are
        tabulated below accompanying with their opening rates.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 mb-20">
        {tables.map((table) => (
          <ProductCard
            name={table.name}
            price={table.price}
            image={table.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
