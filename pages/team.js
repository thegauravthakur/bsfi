import React, { Fragment } from "react";
import AppBar from "../components/AppBar";
import Card from "../components/team/Card";
import Footer from "../components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Kamal Thakur",
      image: "/assets/images/team/kamal.png",
      role: "Lead of Sales",
    },
    {
      name: "Vibha Thakur",
      image: "/assets/images/team/vibha.png",
      role: "Account Manager",
    },
    {
      name: "Piyush Thakur",
      image: "/assets/images/team/piyush.png",
      role: "Director of Sales",
    },
    {
      name: "Ankita Thakur",
      image: "/assets/images/team/ankita.png",
      role: "Lead of Marketing",
    },
    {
      name: "Gaurav Thakur",
      image: "/assets/images/team/gaurav.png",
      role: "Web Developer",
      facebook: "https://fb.com/geekygaurav",
      twitter: "https://twitter.com/gauravcodes",
      instagram: "https://instagram.com/gauravthakur.xd",
    },
    {
      name: "Bindu Thakur",
      image: "/assets/images/team/bindu.png",
      role: "Carpenter",
    },
    {
      name: "Ram Dahyal",
      image: "/assets/images/team/motu.png",
      role: "Carpenter",
    },
    {
      name: "Unknown",
      image: "/assets/images/team/ustaad.png",
      role: "Carpenter",
    },
  ];
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
          {teamMembers.map((member) => (
            <Card
              image={member.image}
              name={member.name}
              role={member.role}
              twitter={member.twitter}
              instagram={member.instagram}
              facebook={member.facebook}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Team;
