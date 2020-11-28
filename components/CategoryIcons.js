import React, { useState } from "react";

const CategoryIcons = ({ Icon, Name }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="md:w-32 mx-auto">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`w-12 sm:cursor-pointer ${
          hover ? "text-blue-600" : "text-gray-800"
        }  mx-auto`}
      >
        <Icon />
      </div>
      <p
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`pt-2 text-center mx-auto sm:cursor-pointer select-none ${
          hover ? "text-blue-600" : "text-gray-600"
        }`}
      >
        {Name}
      </p>
    </div>
  );
};

export default CategoryIcons;
