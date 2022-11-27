import React, { FC } from "react";
import { useOutletContext } from "react-router-dom";
import { Grid } from "@mui/material";
import Portfolio from "../components/Portfolio";

const PortfolioPage: FC = () => {
  const context: any = useOutletContext();
  return (
    <Grid container spacing={4}>
      {context.data &&
        Object.entries(context.data).map((e: any, i) => {
          return <Portfolio key={i} item={e} i={i} />;
        })}
    </Grid>
  );
};

export default PortfolioPage;
