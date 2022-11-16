import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Connect from "../hocs/Connect";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
