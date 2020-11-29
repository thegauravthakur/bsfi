import React, { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import MobileAppBarTile from "./MobileAppBarTile";
import CrossIcon from "../../public/assets/SvgIcons/CrossIcon";

const AppBar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <Fragment>
      <nav className="flex justify-between px-4 py-4 sm:px-10 xl:px-32">
        <div>
          <p
            onClick={() => router.push("/")}
            className="text-lg text-blue-600 font-bold cursor-pointer select-none"
          >
            Bhaga Sidh Furniture Industry
          </p>
        </div>
        <div className="text-gray-600  hidden md:grid grid-cols-4 gap-5">
          <button
            onClick={() => router.push("/")}
            className={`focus:outline-none ${
              router.pathname === "/"
                ? "text-blue-600 font-bold"
                : "hover:text-gray-900"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => router.push("/products")}
            className={`focus:outline-none  ${
              router.pathname === "/products"
                ? "text-blue-600 font-bold"
                : "hover:text-gray-900"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => router.push("/contact")}
            className={`focus:outline-none ${
              router.pathname === "/contact"
                ? "text-blue-600 font-bold"
                : "hover:text-gray-900"
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => router.push("/team")}
            className={`focus:outline-none ${
              router.pathname === "/team"
                ? "text-blue-600 font-bold"
                : "hover:text-gray-900"
            }`}
          >
            Our Team
          </button>
        </div>
        <button
          onClick={() => setShow(true)}
          className=" md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-gray-400 hover:text-gray-600"
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
      <div
        className={`${
          show ? "absolute" : "hidden"
        } top-0 bg-white my-3 p-5  min-w-full shadow-2xl rounded-2xl border md:hidden`}
      >
        <div className="flex justify-between ">
          <p
            onClick={() => router.push("/")}
            className="text-lg text-blue-600 font-bold cursor-pointer"
          >
            Bhaga Sidh Furniture Industry
          </p>
          <button
            onClick={() => setShow(false)}
            className=" focus:outline-none"
          >
            <CrossIcon />
          </button>
        </div>
        {/*<p className="uppercase text-gray-600 py-2">Furniture</p>*/}
        <MobileAppBarTile
          loc={"/"}
          name={"Home"}
          onClick={() => router.push("/")}
        />
        <MobileAppBarTile
          loc={"/products"}
          name={"Our Products"}
          onClick={() => router.push("/products")}
        />
        {/*<p className="uppercase text-gray-600 py-2">Features</p>*/}
        <MobileAppBarTile
          loc={"/contact"}
          name={"Contact Us"}
          onClick={() => router.push("/contact")}
        />
        <MobileAppBarTile
          loc={"/team"}
          name={"Our Team"}
          onClick={() => router.push("/team")}
        />
        {/*<button*/}
        {/*  onClick={() => router.push("/contact")}*/}
        {/*  className="my-3 focus:outline-none w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-md md:text-xl rounded-md"*/}
        {/*>*/}
        {/*  Contact Us*/}
        {/*</button>*/}
      </div>
    </Fragment>
  );
};

export default AppBar;
