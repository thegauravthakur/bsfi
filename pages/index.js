import React from "react";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import WhatMakesUsUnique from "../components/WhatMakesUsUnique";

export default () => (
  <div>
    <div className="min-h-screen">
      <AppBar />
      <Header />
    </div>
    <WhatMakesUsUnique />
  </div>
);
