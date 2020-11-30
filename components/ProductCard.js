import React from "react";
import Image from "next/image";

const ProductCard = ({ description, image, name, price }) => {
  return (
    <div className="shadow hover:shadow-2xl pb-10 px-4 mx-auto rounded cursor-pointer">
      <Image src={image} height={300} width={300} />
      <p className="font-bold">{name} Bed</p>
      <p>{description}</p>
      <p className="font-bold">₹{price}</p>
    </div>
  );
};

export default ProductCard;
