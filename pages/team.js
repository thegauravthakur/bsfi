import React, { Fragment } from "react";
import AppBar from "../components/AppBar";
import Card from "../components/team/Card";
import Footer from "../components/Footer";
import Head from "next/head";

const Team = () => {
  const teamMembers = [
    {
      name: "Kamal Thakur",
      image: "/assets/images/team/kamal.png",
      role: "Lead of Sales",
      instagram: "https://instagram.com/kamal_23k",
      facebook: "https://www.facebook.com/kamal.thakur.583",
      twitter: "https://twitter.com",
    },
    {
      name: "Vibha Thakur",
      image: "/assets/images/team/vibha.png",
      role: "Account Manager",
      instagram: "https://instagram.com/vibhathaakur",
      facebook: "https://www.facebook.com/vibha.thakur.393",
      twitter: "https://twitter.com",
    },
    {
      name: "Piyush Thakur",
      image: "/assets/images/team/piyush.png",
      role: "Director of Sales",
      instagram: "https://instagram.com/thakurpiyush05",
      facebook: "https://www.facebook.com/profile.php?id=100028805540217",
      twitter: "https://twitter.com",
    },
    {
      name: "Ankita Thakur",
      image: "/assets/images/team/ankita.png",
      role: "Lead of Marketing",
      instagram: "https://instagram.com/thakurpiyush05",
      facebook: "https://www.facebook.com/profile.php?id=100028805540217",
      twitter: "https://twitter.com/PChahru",
    },
    {
      name: "Gaurav Thakur",
      image: "/assets/images/team/gaurav.png",
      role: "Web Developer",
      facebook: "https://fb.com/gauravcodes",
      twitter: "https://twitter.com/gauravcodes",
      instagram: "https://instagram.com/gauravthakur.xd",
    },
    {
      name: "Bindu Thakur",
      image: "/assets/images/team/bindu.png",
      role: "Carpenter",
      instagram: "https://instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
    {
      name: "Ram Dahyal",
      image: "/assets/images/team/motu.png",
      role: "Carpenter",
      instagram: "https://instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
    {
      name: "Niranjan",
      image: "/assets/images/team/ustaad.png",
      role: "Carpenter",
      instagram: "https://instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Our Team</title>
      </Head>
      <AppBar />
      <div className="py-10  flex-1">
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
    </div>
  );
};

export default Team;
