import React from "react";
import SpecialitiesCard from "./SpecialitiesCard";
import TickIcon from "../public/assets/SvgIcons/TickIcon";
import SettingIcon from "../public/assets/SvgIcons/SettingIcon";
import StarIcon from "../public/assets/SvgIcons/StarIcon";
import HandIcon from "../public/assets/SvgIcons/HandIcon";

const FeaturesSection = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center text-blue-700 ">
        Our Specialities
      </h1>
      <p className="text-lg mt-3 text-gray-600 max-w-md mx-auto text-center ">
        We have more than 20 years of professional expertise in the market of
        furniture and home renovation
      </p>
      <div className="flex flex-wrap mx-0 sm:mx-8 md:mx-32 xl:mx-60">
        <SpecialitiesCard
          name={"All Kind of Furniture"}
          Icon={TickIcon}
          description={
            "We manufacture all kind of wooden furniture. We also manufacture furniture on order."
          }
        />

        <SpecialitiesCard
          name={"Custom Build"}
          Icon={SettingIcon}
          description={
            "You can additionally provide an entirely custom order according to your necessities."
          }
        />
        <SpecialitiesCard
          name={"99% Client Satisfaction"}
          Icon={StarIcon}
          description={
            "We know the value of client gratification and all our businesses are towards raising it more and more."
          }
        />
        <SpecialitiesCard
          name={"Handmade furniture"}
          Icon={HandIcon}
          description={
            "All our furniture are handmade by adept craftsmen who have decades of expertise in this domain."
          }
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
