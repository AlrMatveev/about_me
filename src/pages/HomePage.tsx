import React, { FC, useState } from "react";
import Avatar from "../components/Avatar";
import About from "../components/About";
import { useAppSelector } from "../hooks/redux";

const HomePage: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Avatar />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default HomePage;
