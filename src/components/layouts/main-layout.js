import React from "react";
import { Header } from "../header/header";

const MainLayout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
    </>
  );
};

export default MainLayout;
