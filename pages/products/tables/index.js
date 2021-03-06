import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Footer from "../../../components/Footer";
import Head from "next/head";

const Index = () => {
  const tables = [
    {
      name: "Dining Tables",
      price: "10,000",
      image: "/assets/images/tables/dining-table.png",
    },
    {
      name: "Dressing Tables",
      price: "8,000",
      image: "/assets/images/tables/dressing-table.png",
    },
    {
      name: "Bed-Side Tables",
      price: "2,000",
      image: "/assets/images/tables/bed-side-table.png",
    },
    {
      name: "Coffee Tables",
      price: "1,000",
      image: "/assets/images/tables/coffee-table.png",
    },
    {
      name: "Console Tables",
      price: "1,000",
      image: "/assets/images/tv-units/tv-table.png",
    },

    {
      name: "Computer Tables",
      price: "3,000",
      image: "/assets/images/tables/computer-table.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <Head>
        <title>Tables</title>
      </Head>
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        Tables
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make tables of numerous varieties. Some of these varieties are
        tabulated below accompanying with their opening rates.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 mb-20 md:gap-y-8 lg:gap-y-12">
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
