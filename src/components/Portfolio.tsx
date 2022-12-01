import React, { FC, useState, useEffect } from "react";
import { Grid, Box, Typography, ButtonGroup, Button } from "@mui/material";
import Zoomer from "../hocs/Zoomer";
import LinkIcon from "@mui/icons-material/Link";

type IItem = {
  item: any;
  i: number;
};

const Portfolio: FC<IItem> = ({ item, i }) => {
  const technologies = item[1]?.technologies?.split(", ");
  return (
    <Grid item md={6} xs={12}>
      <Zoomer i={i}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h6">
            {item[0]}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {technologies &&
              technologies.map((e: string) => {
                return (
                  <Typography
                    variant="subtitle2"
                    key={e}
                    sx={{
                      m: 0.5,
                      border: "1px solid gray",
                      p: 0.5,
                      borderRadius: "3px",
                    }}
                    color="text.secondary"
                  >
                    {e}
                  </Typography>
                );
              })}
          </Box>
          <ButtonGroup variant="text">
            <Button
              disabled={!item[1].github}
              sx={{ textTransform: "none" }}
              startIcon={<LinkIcon />}
              onClick={() => {
                window.open(item[1].github, "_blank");
              }}
            >
              GitHub
            </Button>
            <Button
              disabled={!item[1].demo}
              sx={{ textTransform: "none" }}
              startIcon={<LinkIcon />}
              onClick={() => {
                window.open(item[1].demo, "_blank");
              }}
            >
              Demo
            </Button>
          </ButtonGroup>
        </Box>
      </Zoomer>
    </Grid>
  );
};

export default Portfolio;
