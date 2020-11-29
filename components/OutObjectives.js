import React from "react";
import Image from "next/image";

const OutObjectives = () => {
  return (
    <div className="py-20 px-4 sm:px-10 xl:px-32">
      <h1 className="text-gray-700 text-3xl md:text-4xl  font-bold text-center mb-3 px-4 sm:px-10 xl:px-32 pb-5">
        Our Objectives
      </h1>
      <div className="flex justify-evenly flex-wrap">
        <div className="max-w-sm">
          <img
            className="my-5 h-60 mx-auto"
            src={"/assets/images/quality_check.png"}
          />
          <h2 className="font-bold text-xl my-5">High Quality Products</h2>
          <p>
            to ensure the quality of the goods, all our products have to go
            through various quality checks. Only after qualifying all the
            checks, the product is marked for production.
          </p>
        </div>
        <div className="max-w-sm">
          <img
            className="my-5 h-60 mx-auto"
            src={"/assets/images/online_payment_.png"}
          />
          <h2 className="font-bold text-xl my-5">High Quality Products</h2>
          <p>
            to ensure the quality of the goods, all our products have to go
            through various quality checks. Only after qualifying all the
            checks, the product is marked for production.
          </p>
        </div>
        <div className="max-w-sm">
          <img
            className="my-5 h-60 mx-auto"
            src={"/assets/images/watering_plant.png"}
          />
          <h2 className="font-bold text-xl my-5">High Quality Products</h2>
          <p>
            to ensure the quality of the goods, all our products have to go
            through various quality checks. Only after qualifying all the
            checks, the product is marked for production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutObjectives;
