import React from "react";
import CategoryIcons from "./CategoryIcons";
import BedIcon from "../public/assets/SvgIcons/BedIcon";
import ChairIcon from "../public/assets/SvgIcons/ChairIcon";
import CupBoardIcon from "../public/assets/SvgIcons/CupBoardIcon";
import SofaIcon from "../public/assets/SvgIcons/SofaIcon";
import StorageIcon from "../public/assets/SvgIcons/StorageIcon";
import TvUnitIcon from "../public/assets/SvgIcons/TvUnitIcon";
import MiniTable from "../public/assets/SvgIcons/MiniTable";
import TableIcons from "../public/assets/SvgIcons/TableIcons";
import ProductsIconGroup from "./ProductsIconGroup";

const ProductCategorySection = () => {
  return (
    <div className="py-16 bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-white px-1 sm:px-0 ">
        Explore Our Products
      </h1>
      <p className="text-lg mt-3 text-gray-300 max-w-md mx-auto text-center px-1 sm:px-0 ">
        All products listed here are handmade by our adept craftsmen.
      </p>
      <ProductsIconGroup />
    </div>
  );
};

export default ProductCategorySection;
