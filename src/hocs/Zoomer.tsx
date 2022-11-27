import React, { FC, useEffect, useState } from "react";
import { Grid, Box, Zoom } from "@mui/material";

interface IZoomerProps {
  children: React.ReactNode | React.ReactElement;
  i: number;
}

const Zoomer: FC<IZoomerProps> = ({ children, i }) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 120);
  }, []);
  return (
    <Zoom
      in={load}
      style={{ transitionDelay: 100 * i + "ms" }}
      {...(load ? { timeout: 1000 } : {})}
    >
      <div>{children}</div>
    </Zoom>
  );
};

export default Zoomer;
