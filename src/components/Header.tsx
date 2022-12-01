import React, { FC, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTrail, animated, config } from "react-spring";

const Header: FC = () => {
  const loaction = useLocation();
  const header = loaction.pathname.slice(1).toUpperCase();
  const trail = useTrail(header.length, {
    config: config.stiff,
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
  });

  if (!header) return <></>;
  return (
    <div style={{ display: "flex", fontSize: "30px", margin: "0 0 30px 0" }}>
      {trail.map(({ x, ...otherProps }, i) => (
        <animated.div
          key={i}
          style={{
            ...otherProps,
            transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
          }}
        >
          <animated.div>{header[i]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default Header;
