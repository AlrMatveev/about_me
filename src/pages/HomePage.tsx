import React, { FC, useState } from "react";
import Avatar from "../components/Avatar";
import About from "../components/About";
import { useAppSelector } from "../hooks/redux";
import { Grid, Box } from "@mui/material";

const HomePage: FC = () => {
  return (
    <Grid container sx={{ mt: 1 }}>
      <Grid item md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar />
        </Box>
      </Grid>
      <Grid item md={8} xs={12}>
        <About />
      </Grid>
    </Grid>
  );
};

export default HomePage;
