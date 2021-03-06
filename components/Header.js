import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  return (
    <div className="px-4 sm:px-10 xl:px-32 py-4 lg:flex lg:justify-between mb-5 md:mb-14 lg:mt-10 lg:pb-14 ">
      <div className="self-center max-w-2xl md:text-center lg:text-left md:mx-auto lg:mx-0 ">
        <p className="uppercase text-gray-600 font-semibold ">
          Adorning homes since 1999
        </p>
        <p className="text-4xl font-bold xl:text-7xl font-sans mb-3">
          Premium furniture at{" "}
          <span className="text-blue-600">cheap rates</span>
        </p>
        <p className="text-gray-500 text-lg">
          Here at Bhaga Sidh Furniture Industry, we make wooden furniture that
          fits your needs. We also provide free delivery up to 12 miles.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 sm:max-w-sm  md:max-w-md lg:max-w-xl md:mx-auto lg:mx-0 ">
          <button
            onClick={() => router.push("/products")}
            className="focus:outline-none px-8 py-3 bg-blue-600 hover:bg-blue-700  text-white text-md md:text-xl rounded-md transform hover:-translate-y-1 duration-300 hover:scale-100"
          >
            Our Products
          </button>
          <Link href={"/contact"}>
            <button className="focus:outline-none px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-md md:text-xl rounded-md transform hover:-translate-y-1 duration-300 hover:scale-100">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="self-center my-auto text-center lg:text-left mx-auto mx-0 mt-16 ">
        <Image
          alt={"Header Image"}
          height={400}
          width={500}
          priority
          loading="eager"
          className="mx-auto border-blue-200 rounded-3xl"
          src="/assets/images/headerImage.png"
        />
      </div>
    </div>
  );
};

export default Header;
