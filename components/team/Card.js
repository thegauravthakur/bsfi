import React from "react";
import FacebookIcon from "../../public/assets/SvgIcons/FacebookIcon";
import TwitterIcon from "../../public/assets/SvgIcons/TwitterIcon";
import InstagramIcon from "../../public/assets/SvgIcons/InstagramIcon";

const Card = ({ image, name, role, facebook, twitter, instagram }) => {
  return (
    <div className="rounded-md border-dashed border-2 mb-10">
      <img
        className="rounded-3xl shadow-2xl"
        src={image}
        height={250}
        width={"100%"}
      />

      <div className="text-center py-3">
        <p className="font-bold text-gray-600">{name}</p>
        <p className="my-1">{role}</p>
        <div className="flex justify-evenly px-10 text-gray-700">
          <FacebookIcon onClick={() => window.open(facebook, "_blank")} />
          <TwitterIcon onClick={() => window.open(twitter, "_blank")} />
          <InstagramIcon onClick={() => window.open(instagram, "_blank")} />
        </div>
      </div>
    </div>
  );
};

export default Card;
