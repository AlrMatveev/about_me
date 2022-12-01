import React from "react";
import { IconButton, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitButton = () => {
  const handleGit = () => {
    window.open("https://github.com/AlrMatveev/about_me/", "_blank");
  };
  return (
    <Box sx={{ m: 0.3 }}>
      <IconButton size="large" color="secondary" onClick={handleGit}>
        <GitHubIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default GitButton;
