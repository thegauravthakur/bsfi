import React from "react";
import AppBar from "../../../components/AppBar";
import Image from "next/image";
import ProductCard from "../../../components/ProductCard";
import Select from "react-select";

const Index = () => {
  const bedList = [
    {
      name: "Fancy Bed",
      description: "Bed with storage",
      price: "10,000",
      image: "/assets/images/bed/bed1.png",
    },
    {
      name: "Fancy Bed",
      description: "Bed with storage",
      price: "16,000",
      image: "/assets/images/bed/bed2.png",
    },
  ];
  const options = [
    { value: "all", label: "All" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <AppBar />
      <h1 className="text-center text-5xl font-bold text-gray-800 py-10">
        Beds
      </h1>
      <div className="px-4 py-4 sm:px-10 xl:px-32">
        <Select
          onChange={(e) => console.log(e.label)}
          defaultValue={options[0]}
          className="max-w-sm mb-10"
          options={options}
        />
      </div>
      <div className="grid mx-10 md:mx-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-0">
        {bedList.map((bed) => (
          <ProductCard
            name={bed.name}
            description={bed.description}
            price={bed.price}
            image={bed.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
