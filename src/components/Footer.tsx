import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
  var scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  return <Box>Footer</Box>;
};

export default Footer;
