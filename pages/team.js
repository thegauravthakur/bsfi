import React, { Fragment } from "react";
import AppBar from "../components/AppBar";
import Image from "next/image";
import FacebookIcon from "../public/assets/SvgIcons/FacebookIcon";
import TwitterIcon from "../public/assets/SvgIcons/TwitterIcon";
import InstagramIcon from "../public/assets/SvgIcons/InstagramIcon";
import Card from "../components/team/Card";

const Team = () => {
  return (
    <Fragment>
      <AppBar />
      <div className=" py-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 px-1 sm:px-0 ">
          Meet Out Team
        </h1>
        <p className="text-lg mt-3 text-gray-600 max-w-md mx-auto text-center px-1 sm:px-0 ">
          Bhaga Sidh Furniture Industry is built and sustained by these
          astounding folks.
        </p>
        <div className="flex justify-evenly flex-wrap  lg:mx-32 xl:mx-40 mt-16">
          <Card
            image={"/assets/images/team/kamal.png"}
            name={"Kamal Thakur"}
            role={"Lead of Sales"}
          />

          <Card
            image={"/assets/images/team/vibha.png"}
            name={"Vibha Thakur"}
            role={"Account Manager"}
            facebook={"https://www.facebook.com/vibha.thakur.393"}
            twitter={"https://www.twitter.com/"}
            instagram={"https://instagram.com/vibhathaakur"}
          />
          <Card
            image={"/assets/images/team/piyush.png"}
            name={"Piyush Thakur"}
            role={"Director of Sales"}
          />
          <Card
            image={"/assets/images/team/gaurav.png"}
            name={"Gaurav Thakur"}
            role={"Web Designer"}
          />
          <Card
            image={"/assets/images/team/ankita.png"}
            name={"Ankita Thakur"}
            role={"Lead of Marketing"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
