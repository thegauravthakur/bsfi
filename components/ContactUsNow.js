import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ContactUsNow = () => {
  const router = useRouter();
  return (
    <div className=" bg-gray-900 pt-14 text-white  px-4 py-4 sm:px-10 xl:px-32">
      <div>
        <h3 className="text-2xl md:text-4xl text-gray-300 font-bold">
          So, what are you waiting for?
        </h3>
        <h3 className="text-2xl md:text-4xl font-bold mb-9">
          Contact us today
        </h3>
      </div>
      <Link href={"/contact"}>
        <button className="focus:outline-none px-5 py-2 md:px-8 md:py-3 bg-blue-600 hover:bg-blue-700  text-white text-md md:text-xl rounded-md ">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ContactUsNow;
