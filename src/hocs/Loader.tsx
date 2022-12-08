import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { Box } from "@mui/material";
import { useSpring, animated, config, useTransition } from "react-spring";

interface ILoaderProps {
  children: React.ReactNode | React.ReactElement;
}

const style = {
  out: {
    position: "absolute",
  },
  in: {
    border: "2px dashed rgba(0,0,0,0.8)",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
  },
};

const Loader: FC<ILoaderProps> = ({ children }) => {
  const load = useAppSelector((state) => state.pageReducer.status);
  const transitions = useTransition(load === "loading", {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: load === "loading",
    delay: 0,
    config: config.molasses,
  });
  const spring = useSpring({
    loop: true,
    to: { transform: "rotate(0deg)" },
    from: { transform: "rotate(360deg)" },
    config: config.slow,
  });
  return (
    <>
      <Box>
        {transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <Box sx={style.out}>
                  <animated.div style={spring}>
                    <Box sx={style.in}></Box>
                  </animated.div>
                </Box>
              </animated.div>
            )
        )}
        {children}
      </Box>
    </>
  );
};

export default Loader;
