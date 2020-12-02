import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Footer from "../../../components/Footer";
import Head from "next/head";

const Index = () => {
  const extras = [
    {
      name: "Wooden Windows",
      price: "10,000",
      image: "/assets/images/extra/wooden-window.png",
    },
    {
      name: "Wooden Doors",
      price: "10,000",
      image: "/assets/images/extra/wooden-Door.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <Head>
        <title>Extras</title>
      </Head>
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        Extra
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make numerous other type of items. Some of these items are tabulated
        below accompanying with their opening rates.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 mb-20 md:gap-y-8 lg:gap-y-12">
        {extras.map((extra) => (
          <ProductCard
            name={extra.name}
            price={extra.price}
            image={extra.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
