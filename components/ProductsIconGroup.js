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

const ProductsIconGroup = () => {
  return (
    <div className="grid grid-cols-4 sm:px-42 md:px-20 lg:px-36 xl:px-96 gap-y-5 mt-8">
      <CategoryIcons Icon={BedIcon} link={"/products/beds"} Name={"Beds"} />
      <CategoryIcons
        Icon={ChairIcon}
        link={"/products/sittings"}
        Name={"Sittings"}
      />
      <CategoryIcons
        Icon={CupBoardIcon}
        link={"/products/cupboards"}
        Name={"Cupboards"}
      />
      <CategoryIcons Icon={SofaIcon} link={"/products/sofas"} Name={"Sofa"} />
      <CategoryIcons
        Icon={StorageIcon}
        link={"/products/storages"}
        Name={"Storage"}
      />
      <CategoryIcons
        Icon={TvUnitIcon}
        link={"/products/tv-units"}
        Name={"TV Units"}
      />
      <CategoryIcons
        Icon={TableIcons}
        link={"/products/tables"}
        Name={"Table"}
      />
      <CategoryIcons Icon={MiniTable} Name={"Extra"} />
    </div>
  );
};

export default ProductsIconGroup;
