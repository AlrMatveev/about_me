import React, { FC, useState } from "react";
import { useTrail, animated, config } from "react-spring";
import { NavLink } from "react-router-dom";

interface IMenuProps {
  handleClick: () => void;
  state?: boolean;
}

const style: any = {
  container: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "5000",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
};

const links: string[] = [
  "/",
  "/education",
  "/technologies",
  "/portfolio",
  "/contacts",
];
const items: string[] = [
  "About_me",
  "Education",
  "Technologies",
  "Portfolio",
  "Contacts",
];

const Menu: FC<IMenuProps> = ({ handleClick }) => {
  const trail = useTrail(items.length, {
    config: config.stiff,
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <div style={style.container} onClick={handleClick}>
      <div style={style.menu}>
        {trail.map(({ y, ...otherProps }, i) => (
          <animated.div
            key={items[i]}
            style={{
              ...otherProps,
              transform: y.interpolate((y) => `translate3d(0, ${y}px, 0)`),
            }}
          >
            <animated.div style={{ margin: "3px 0" }}>
              <NavLink
                style={{
                  backgroundColor: "rgba(0,0,0,0.3)",
                  display: "block",
                  color: "white",
                  padding: "7px",
                  borderRadius: "3px",
                }}
                to={links[i]}
              >
                {items[i]}
              </NavLink>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
