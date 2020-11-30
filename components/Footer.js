import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div
      className={`bg-gray-900 py-5  ${
        router.pathname === "/products"
          ? "absolute left-0 right-0 bottom-0"
          : ""
      } ${router.pathname !== "/" ? "rounded-t-3xl" : ""}`}
    >
      <div className="flex justify-evenly w-32 mx-auto ">
        <IoLogoFacebook color={"white"} size={35} className="cursor-pointer" />
        <AiOutlineTwitter
          color={"white"}
          size={35}
          className="cursor-pointer"
        />
        <IoLogoInstagram color={"white"} size={35} className="cursor-pointer" />
      </div>
      <div className="text-white flex justify-evenly w-52 mx-auto mt-3">
        <p className="footer-link cursor-pointer text-sm">Products</p>
        <p className="footer-link cursor-pointer text-sm">Contact</p>
        <p className="footer-link cursor-pointer text-sm">Team</p>
      </div>
      <div className="text-white flex justify-evenly w-52 mx-auto mt-2">
        <p className="footer-link cursor-pointer text-sm">Terms of Use</p>
        <p className="footer-link cursor-pointer text-sm">Privacy Policy</p>
      </div>
      <p className="text-center text-gray-400">
        Made with ❤ in India by{" "}
        <Link href="https://gauravthakur.in">
          <a target="_blank" className="text-white footer-link">
            Gaurav Thakur
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
