import React, { FC } from "react";
import { useOutletContext } from "react-router-dom";
import { Grid } from "@mui/material";
import Technology from "../components/Technology";
import Header from "../components/Header";

const TechnologiesPage: FC = () => {
  const context: any = useOutletContext();
  return (
    <Grid container spacing={4}>
      {context.data &&
        Object.entries(context.data).map((e: any, i) => {
          return <Technology key={i} item={e} i={i} />;
        })}
    </Grid>
  );
};

export default TechnologiesPage;
