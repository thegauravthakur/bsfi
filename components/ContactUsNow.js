import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ContactUsNow = () => {
  const router = useRouter();
  return (
    <div className="px-4 sm:px-10 xl:px-32 bg-gray-900 py-14 text-white text-center ">
      <h3 className="text-2xl md:text-4xl text-gray-300 font-bold">
        So, what are you waiting for?
      </h3>
      <h3 className="text-2xl md:text-4xl font-bold mb-9">Contact us today</h3>
      <Link href={"/contact"}>
        <button className="focus:outline-none px-8 py-3 bg-blue-600 hover:bg-blue-700  text-white text-md md:text-xl rounded-md">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ContactUsNow;
