import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Connect from "../hocs/Connect";

const Layout: FC = () => {
  const { page, status } = useAppSelector((state) => state.pageReducer);
  const { name, data } = page;
  const context = { name, data, status };
  return (
    <Connect>
      <Header />
      <Outlet context={context} />
    </Connect>
  );
};

export default Layout;
