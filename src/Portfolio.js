import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  Grow,
  ButtonGroup,
} from "@mui/material";
import { useState, useEffect } from "react";
import LinkIcon from "@mui/icons-material/Link";

const items = [
  {
    name: "Сайт начинающей веб-студии Wetop.ru",
    description:
      "Сайт начинающей веб-студии. Почти во всех проектах на сайте wetop.ru я участвовал. Гордиться особо нечем... но, тем не менее, дарагоценный опыт я получил =)",
    git: "",
    link: "https://wetop.ru/",
  },
  {
    name: "Тестовое задание Gridnine Systems",
    description: "Успешно выполнил тестовое задание.",
    git: "https://github.com/AlrMatveev/test_gridnine_systems",
    link: "https://alrmatveev.github.io/test_gridnine_systems/",
  },
];

function Portfolio() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);
  return (
    <Grid container spacing={5}>
      {items.map((e, i) => {
        return (
          <Grid key={i} item xs={12} md={6}>
            <Grow
              in={load}
              style={{
                transformOrigin: "50% 50% 50%",
                transitionDelay: 200 * i + "ms",
              }}
              {...(load ? { timeout: 1000 } : {})}
            >
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body1">{e.name}</Typography>

                <ButtonGroup variant="text">
                  <Button
                    sx={{ textTransform: "none" }}
                    startIcon={<LinkIcon />}
                    onClick={() => {
                      if (e.git) window.open(e.git, "_blank");
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    sx={{ textTransform: "none" }}
                    startIcon={<LinkIcon />}
                    onClick={() => {
                      if (e.link) window.open(e.link, "_blank");
                    }}
                  >
                    Demo
                  </Button>
                </ButtonGroup>
              </Box>
            </Grow>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Portfolio;
