import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Footer from "../../../components/Footer";

const Index = () => {
  const chairs = [
    {
      name: "Chairs with armrest",
      price: "10,000",
      image: "/assets/images/sittings/chair-with-arm-rest.jpg",
    },
    {
      name: "Benches without armrest",
      price: "10,000",
      image: "/assets/images/sittings/bench-without-arm-rest.png",
    },
    {
      name: "Wooden Stools",
      price: "10,000",
      image: "/assets/images/sittings/stool.png",
    },

    {
      name: "Chairs without armrest",
      price: "10,000",
      image: "/assets/images/sittings/chair-without-arm-rest.png",
    },
    {
      name: "Benches with armrest",
      price: "10,000",
      image: "/assets/images/sittings/bench-with-arm-rest.png",
    },
    {
      name: "Long Stools",
      price: "10,000",
      image: "/assets/images/sittings/long-stool.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        Chairs
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make chairs of numerous varieties. Some of these varieties are
        tabulated below accompanying with their opening rates.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 mb-20">
        {chairs.map((chair) => (
          <ProductCard
            name={chair.name}
            price={chair.price}
            image={chair.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
