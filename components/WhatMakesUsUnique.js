import React from "react";

const WhatMakesUsUnique = () => {
  return (
    <div className="bg-gray-900 py-20 ">
      <h2 className="text-white text-3xl md:text-4xl  font-bold text-center mb-3 px-4 sm:px-10 xl:px-32">
        Why you should prefer us from other rivals in the market?
      </h2>
      <h3 className="text-center text-gray-300 text-md md:text-xl px-4 sm:px-10 xl:px-32">
        Aside from being one of the adored furniture stores in the town, we
        provide many perks for our clients like,
      </h3>
      <div className="text-white flex justify-evenly mt-8">
        <div />
        <div>
          <div className="h-10 w-10 md:h-16 md:w-16 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                fill="#fff"
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
          </div>
          <p className="text-center text-xl sm:text-4xl font-bold">100%</p>
          <p className=" text-md sm:text-xl text-gray-300 text-center">
            Free Delivery
          </p>
        </div>
        <div>
          <div className="h-10 w-10 md:h-16 md:w-16 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <p className="text-center text-xl sm:text-4xl font-bold">2 Years</p>
          <p className=" text-md sm:text-xl text-gray-300 text-center">
            Warranty
          </p>
        </div>
        <div>
          <div className="h-10 w-10 md:h-16 md:w-16 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <p className="text-center text-xl sm:text-4xl font-bold">100%</p>
          <p className=" text-md sm:text-xl text-gray-300 text-center">
            Custom Build
          </p>
        </div>
        <div />
      </div>
    </div>
  );
};

export default WhatMakesUsUnique;
