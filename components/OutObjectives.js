import React from "react";
import Image from "next/image";

const OutObjectives = () => {
  return (
    <div className="py-20 px-4 sm:px-10 xl:px-32">
      <h1 className="text-gray-700 text-3xl md:text-4xl  font-bold text-center  px-4 sm:px-10 xl:px-32 ">
        Our Objectives
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-md mx-auto text-center pb-5">
        Objectives are important in any business because they convert visions
        into clear-cut measurable targets.
      </p>
      <div className="flex justify-evenly flex-wrap">
        <div className="max-w-sm">
          <img
            alt={"High Quality Products"}
            className="my-5 h-60 mx-auto"
            src={"/assets/images/quality_check.png"}
          />
          <h2 className="font-bold text-xl my-5">High Quality Products</h2>
          <p className="text-lg">
            To ensure the quality of the goods, all our products have to go
            through various quality checks. Only after qualifying all the
            checks, the product is marked for production.
          </p>
        </div>
        <div className="max-w-sm">
          <img
            alt={"client satisfaction"}
            className="my-5 h-60 mx-auto"
            src={"/assets/images/team_success_.png"}
          />
          <h2 className="font-bold text-xl my-5">Client Satisfaction</h2>
          <p className="text-lg">
            Client satisfaction pays an important role in any business. We know
            the value of client gratification and all our businesses are towards
            raising it more and more.
          </p>
        </div>
        <div className="max-w-sm">
          <img
            alt={"affordable pricing"}
            className="my-5 h-60 mx-auto"
            src={"/assets/images/calculator.png"}
          />
          <h2 className="font-bold text-xl my-5">Affordable Pricing</h2>
          <p className="text-lg">
            All our products can be considered as value for money and are priced
            very accordingly. We make sure that even a lower-middle-class person
            can afford our products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutObjectives;
