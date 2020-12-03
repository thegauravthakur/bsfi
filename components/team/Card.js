import React from "react";
import FacebookIcon from "../../public/assets/SvgIcons/FacebookIcon";
import TwitterIcon from "../../public/assets/SvgIcons/TwitterIcon";
import InstagramIcon from "../../public/assets/SvgIcons/InstagramIcon";
import { IoMdOpen } from "react-icons/io";

import { useState } from "react/cjs/react.production.min";
import Image from "next/image";

const Card = ({ image, name, role, facebook, twitter, instagram }) => {
  return (
    <div className="rounded-md border-dashed border-2 mb-10 hover:shadow-2xl ">
      <div className="shadow-2xl rounded-2xl min-w-170 md:min-w-200 lg:min-w-250">
        <Image
          className="rounded-2xl "
          layout="responsive"
          src={image}
          height={350}
          width={270}
        />
      </div>

      <div className="text-center py-3">
        <p className="font-bold text-gray-600">{name}</p>
        <p className="my-1">{role}</p>
        <div className="flex justify-evenly my-2 px-10 text-gray-700 remove-touch-effect">
          <FacebookIcon onClick={() => window.open(facebook, "_blank")} />
          <TwitterIcon onClick={() => window.open(twitter, "_blank")} />
          {name === "Gaurav Thakur" ? (
            <IoMdOpen
              onClick={() => window.open("https://gauravthakur.in", "_blank")}
              size={"1.5rem"}
              className="cursor-pointer"
            />
          ) : (
            <InstagramIcon onClick={() => window.open(instagram, "_blank")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
