import React from "react";
import Image from "next/image";

const AppBar = () => {
  return (
    <nav className="flex justify-between px-4  sm:px-10 xl:px-32 py-4">
      <div>
        <p className="text-lg text-blue-600 font-bold">
          Bhaga Sidh Furniture Industry
        </p>
      </div>
      <div className="text-gray-600  hidden md:grid grid-cols-3 gap-5">
        <button className="focus:outline-none hover:text-gray-900">
          Products
        </button>
        <button className="focus:outline-none hover:text-gray-900">
          Locate Us
        </button>
        <button className="focus:outline-none hover:text-gray-900">
          Custom Build
        </button>
      </div>
      <button className="md:hidden focus:outline-none">
        <svg
          className="h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default AppBar;
