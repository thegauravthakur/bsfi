import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CategoryIcons = ({ Icon, Name, link }) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <Link href={link ? link : "#"}>
      <div className="md:w-32 mx-auto">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`w-12 sm:cursor-pointer ${
            hover
              ? "text-blue-500"
              : router.pathname === "/"
              ? "text-gray-400"
              : "text-gray-700"
          }  mx-auto`}
        >
          <Icon size={"2.5em"} />
        </div>
        <p
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`pt-2 text-center mx-auto sm:cursor-pointer select-none ${
            hover
              ? "text-blue-500"
              : router.pathname === "/"
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >
          {Name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryIcons;
