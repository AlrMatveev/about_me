import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { fetchData } from "../redux/dataSlice";

const TechnologiesPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData("technologies"));
  }, []);
  return <div>TechnologiesPage</div>;
};

export default TechnologiesPage;
