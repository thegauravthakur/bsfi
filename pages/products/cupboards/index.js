import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Footer from "../../../components/Footer";
import Head from "next/head";

const Index = () => {
  const cupboards = [
    {
      name: "2 Door Wardrobes",
      price: "20,000",
      image: "/assets/images/cupboard/wardrobe-with-mirror.png",
    },
    {
      name: "3 door Wardrobes",
      price: "25,000",
      image: "/assets/images/cupboard/3-door-wardrobe.png",
    },
    {
      name: "Single Door Wardrobes",
      price: "10,000",
      image: "/assets/images/cupboard/single-door-wardrobe.png",
    },
    {
      name: "2 Door Wardrobes without mirror",
      price: "12,000",
      image: "/assets/images/cupboard/2-door-wardrobe-without-mirror.png",
    },

    {
      name: "3 door Wardrobes with mirror",
      price: "25,000",
      image: "/assets/images/cupboard/3-door-wardrobe-with-mirror.png",
    },
    {
      name: "1 door wardrobes with mirror",
      price: "10,000",
      image: "/assets/images/cupboard/single-door-wardrobe-with-mirror.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <Head>
        <title>Cupboards</title>
      </Head>
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        Wardrobes
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make wardrobes of numerous varieties. Some of these varieties are
        tabulated below accompanying with their opening rates.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 mb-20 md:gap-y-8 lg:gap-y-12">
        {cupboards.map((cupboard) => (
          <ProductCard
            name={cupboard.name}
            price={cupboard.price}
            image={cupboard.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
