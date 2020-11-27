import React, { Fragment } from "react";
import AppBar from "../components/AppBar";
import CategoryIcons from "../components/CategoryIcons";
import BedIcon from "../components/SvgIcons/BedIcon";
import ChairIcon from "../components/SvgIcons/ChairIcon";
import CupBoardIcon from "../components/SvgIcons/CupBoardIcon";
import SofaIcon from "../components/SvgIcons/SofaIcon";
import StorageIcon from "../components/SvgIcons/StorageIcon";
import TvUnitIcon from "../components/SvgIcons/TvUnitIcon";
import MiniTable from "../components/SvgIcons/MiniTable";
import TableIcons from "../components/SvgIcons/TableIcons";

const Index = () => {
  return (
    <Fragment>
      <AppBar />
      <div className="py-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 px-1 sm:px-0 ">
          Explore Our Products
        </h1>
        <p className="text-lg mt-3 text-gray-600 max-w-md mx-auto text-center px-1 sm:px-0 ">
          All products listed here are handmade by our adept craftsmen.
        </p>
        <div className="grid grid-cols-4 sm:px-42 md:px-20 lg:px-36 xl:px-96 gap-y-5 mt-8">
          <CategoryIcons Icon={BedIcon} Name={"Beds"} />
          <CategoryIcons Icon={ChairIcon} Name={"Sittings"} />
          <CategoryIcons Icon={CupBoardIcon} Name={"Cupboards"} />
          <CategoryIcons Icon={SofaIcon} Name={"Sofa"} />
          <CategoryIcons Icon={StorageIcon} Name={"Storage"} />
          <CategoryIcons Icon={TvUnitIcon} Name={"TV Units"} />
          <CategoryIcons Icon={MiniTable} Name={"Mini Table"} />
          <CategoryIcons Icon={TableIcons} Name={"Table"} />
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
