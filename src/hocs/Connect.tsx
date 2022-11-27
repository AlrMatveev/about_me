import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { fetchPage } from "../redux/pageSlice";
import { useLocation } from "react-router-dom";

interface IConnectProps {
  children: React.ReactNode | React.ReactElement;
}

const Connect: FC<IConnectProps> = ({ children }) => {
  const location = useLocation();
  const page =
    location.pathname.length > 1 ? location.pathname.slice(1) : "about_me";
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPage(page));
    }, 170);
  }, []);
  return <div>{children}</div>;
};

export default Connect;
