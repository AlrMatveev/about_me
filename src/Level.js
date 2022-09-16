import { Box, Zoom } from "@mui/material";
import { useState, useEffect } from "react";

function Level({ level, delay }) {
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
                border: "1px solid #1976d2",
                m: 1,
                boxShadow: 2,
                borderRadius: "50%",
                background: i < level ? "#1976d2" : "none",
              }}
            ></Box>
          </Zoom>
        );
      })}
    </Box>
  );
}

export default Level;
