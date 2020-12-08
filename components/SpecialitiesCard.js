import React from "react";

const SpecialitiesCard = ({ Icon, name, description }) => {
  return (
    <div className="w-40 sm:w-48 shadow-2xl py-7 px-3 rounded-xl my-10   mx-auto ">
      <div className="h-11 w-11 sm:h-14:w-14 text-blue-600 mx-auto ">
        <Icon className={"h-11 w-11 sm:h-14:w-14"} />
      </div>
      <h2 className="font-bold text-gray-700 text-center my-3">{name}</h2>
      <p className="text-md mt-3 text-gray-600 max-w-md mx-auto text-center">
        {description}
      </p>
    </div>
  );
};

export default SpecialitiesCard;
