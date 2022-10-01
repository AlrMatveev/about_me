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
    technologies: ["React", "Mui"],
    git: "",
    link: "https://wetop.ru/",
  },
  {
    name: "Тестовое задание Gridnine Systems",
    description: "Успешно выполнил тестовое задание.",
    technologies: ["React", "Redux", "Mui"],
    git: "https://github.com/AlrMatveev/test_gridnine_systems",
    link: "https://alrmatveev.github.io/test_gridnine_systems/",
  },
  {
    name: "Pet-проект Weather Map",
    description: "Pet-проект - Yandex Map Api + Weather Api free",
    technologies: [
      "React",
      "ReduxToolkit",
      "Mui",
      "YandexMapApi",
      "WeatherApiFree",
    ],
    git: "https://github.com/AlrMatveev/weather_map",
    link: "https://alrmatveev.github.io/weather_map/",
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
    <Grid container spacing={2}>
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
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {e.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {e.technologies.map((e) => {
                    return (
                      <Box
                        key={e}
                        sx={{
                          m: 0.5,
                          p: 0.2,
                          border: "1px solid #1976d2",
                          borderRadius: "3px",
                        }}
                      >
                        {e}
                      </Box>
                    );
                  })}
                </Typography>
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
