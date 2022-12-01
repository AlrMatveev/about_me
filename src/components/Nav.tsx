import React, { FC } from "react";
import { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";

const Nav: FC = () => {
  const [menu, setMenu] = useState(false);
  const transitions = useTransition(menu, {
    from: { opacity: 0, zIndex: 5000 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 0,
    config: config.default,
  });

  const handleOpen = () => {
    setMenu(true);
  };

  const handleClose = () => {
    setMenu(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <IconButton size="large" color="primary" onClick={handleOpen}>
        <MenuIcon fontSize="inherit" />
      </IconButton>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <Menu handleClick={handleClose} />
            </animated.div>
          )
      )}
    </div>
  );
};

export default Nav;
