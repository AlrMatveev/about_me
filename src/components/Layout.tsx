import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Connect from "../hocs/Connect";
import Footer from "./Footer";

const Layout: FC = () => {
  const { page, status } = useAppSelector((state) => state.pageReducer);
  const { name, data } = page;
  const context = { name, data, status };
  return (
    <Connect>
      <Header />
      <Outlet context={context} />
      <Footer />
    </Connect>
  );
};

export default Layout;
