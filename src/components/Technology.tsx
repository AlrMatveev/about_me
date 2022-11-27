import React, { FC, useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Level from "./Level";
import Zoomer from "../hocs/Zoomer";

type IItem = {
  item: any;
  i: number;
};

const Technology: FC<IItem> = ({ item, i }) => {
  return (
    <Grid item md={3} xs={6}>
      <Zoomer i={i}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{item[0]}</Typography>
          <Level level={item[1]} delay={100 * i + 1000} />
        </Box>
      </Zoomer>
    </Grid>
  );
};

export default Technology;
