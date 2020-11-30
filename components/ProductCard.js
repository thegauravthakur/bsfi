import React from "react";
import Image from "next/image";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="shadow hover:shadow-2xl pb-5 mx-auto cursor-pointer border-2   sm:border-0">
      <Image src={image} height={220} width={390} />
      <p className="font-bold px-4 text-center text-gray-700 select-none">
        {name}{" "}
      </p>
      <p className="font-bold px-4 text-center text-blue-800 select-none">
        starting ₹{price}
      </p>
    </div>
  );
};

export default ProductCard;
