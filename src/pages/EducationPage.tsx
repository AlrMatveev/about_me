import React, { FC } from "react";
import { useOutletContext } from "react-router-dom";
import { Grid } from "@mui/material";
import Education from "../components/Education";

const EducationPage: FC = () => {
  const context: any = useOutletContext();
  return (
    <Grid container spacing={4}>
      {context.data &&
        Object.entries(context.data).map((e: any, i) => {
          return <Education key={i} item={e} i={i} />;
        })}
    </Grid>
  );
};

export default EducationPage;
