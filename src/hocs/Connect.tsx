import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { fetchData } from "../redux/dataSlice";
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
    dispatch(fetchData(page));
  }, []);
  return <div>{children}</div>;
};

export default Connect;
