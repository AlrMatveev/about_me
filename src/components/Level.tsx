import React, { FC, useState, useEffect } from "react";
import { Box, Zoom } from "@mui/material";

interface ILevelProps {
  level: number;
  delay: number;
}

const Level: FC<ILevelProps> = ({ level, delay }) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, delay);
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {new Array(5).fill(undefined).map((_, i) => {
        return (
          <Zoom
            key={i}
            in={load}
            style={{ transitionDelay: 300 * i + "ms" }}
            {...(load ? { timeout: 500 } : {})}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                border: "1px solid rgba(0,0,0,0.3)",
                m: { md: 1, xs: 0.5 },
                boxShadow: 1,
                borderRadius: "50%",
                background: i < level ? "rgba(0,0,0,0.7)" : "none",
              }}
            ></Box>
          </Zoom>
        );
      })}
    </Box>
  );
};

export default Level;
