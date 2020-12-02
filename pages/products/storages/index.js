import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Footer from "../../../components/Footer";

const Index = () => {
  const storages = [
    {
      name: "Drawers",
      price: "10,000",
      image: "/assets/images/storages/drawer.png",
    },
    {
      name: "Multi-Purpose Cabinets",
      price: "10,000",
      image: "/assets/images/storages/multi-purpose-cabinet.png",
    },

    {
      name: "Shoe Racks",
      price: "10,000",
      image: "/assets/images/storages/shoe-rack.png",
    },
    {
      name: "Storage Cabinets",
      price: "10,000",
      image: "/assets/images/storages/storage-cabinet.png",
    },
    {
      name: "Corner Storages",
      price: "10,000",
      image: "/assets/images/storages/corner-storage.png",
    },
    {
      name: "Book Shelves",
      price: "10,000",
      image: "/assets/images/storages/book-shelf.png",
    },
  ];

  return (
    <div>
      <AppBar />
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 sm:pt-3 md:pt-10 ">
        Storages
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-lg mx-auto text-center px-1 sm:px-0  ">
        We make storages of numerous varieties. Some of these varieties are
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
