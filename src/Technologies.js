import { Box, Zoom, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Level from "./Level";
import { useSelector, useDispatch } from "react-redux";
import { fetchTechnologies } from "./redux/technologiesSlice";

const items = [
  { name: "React", level: 5 },
  { name: "Redux", level: 4 },
  { name: "ReduxToolkit", level: 4 },
  { name: "Joomla", level: 4 },
  { name: "WordPress", level: 4 },
  { name: "OpenCart", level: 3 },
  { name: "MUI", level: 3 },
  { name: "Bootstrap", level: 3 },
  { name: "Firebase", level: 2 },
  { name: "ReactNative", level: 2 },
  { name: "Next", level: 2 },
  { name: "Pixi", level: 2 },
  { name: "Node", level: 1 },
  { name: "TypeScript", level: 1 },
  { name: "Konva", level: 1 },
];

function Technologies() {
  const technologies = useSelector((state) => state.technologies);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, []);
  return (
    <Grid container spacing={4}>
      {technologies.status === "loaded" &&
        technologies.data.map((e, i) => {
          return (
            <Grid key={i} item xs={6} md={3}>
              <Zoom
                in={load}
                style={{ transitionDelay: 100 * i + "ms" }}
                {...(load ? { timeout: 1000 } : {})}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Box>{e.name}</Box>
                  <Box>
                    <Level level={e.level} delay={100 * i + 1000} />
                  </Box>
                </Box>
              </Zoom>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default Technologies;
