import { Box, Card, Grid, Typography, Button, Grow } from "@mui/material";
import { useState, useEffect } from "react";
import LinkIcon from "@mui/icons-material/Link";
import reactPng from "./react.png";
import jsPng from "./js.png";
import nodePng from "./node.png";

const items = [
  {
    name: "JavaScript",
    place: "learn.javascript.ru",
    programm: [
      "Основы языка",
      "Объекты",
      "Объекты",
      "DOM-модель",
      "Обработчики событий",
      "Компонентная архитектура, ООП",
      "Взаимодействие с сервером",
      "Promise в деталях",
      "Сборка проекта, фреймворки",
    ],
    certificate:
      "https://learn.javascript.ru/courses/jsbasic-20211108/aleksandr-matveev7/ru/certificate.jpg",
    backgroundI: jsPng,
    backgroundC: "#ffe000",
    status: true,
    date: 2021,
  },
  {
    name: "React",
    place: "learn.javascript.ru",
    programm: [
      "Virtual DOM, JSX",
      "React Hooks",
      "Jest, ReactTestingLibrary",
      "Css modules",
      "Custom hooks",
      "React-router",
      "Redux.js",
      "Redux-thunk",
      "CSSTransitionGroup",
    ],
    certificate:
      "https://learn.javascript.ru/courses/react-20220114/aleksandr-matveev7/ru/certificate.jpg",
    backgroundI: reactPng,
    backgroundC: "#1c1c1c",
    status: true,
    date: 2022,
  },
  {
    name: "Node",
    place: "learn.javascript.ru",
    programm: [
      "MongoDB",
      "Авторизация",
      "Websockets",
      "unit-тесты",
      "e2e тестирование",
    ],
    certificate: "",
    backgroundI: nodePng,
    backgroundC: "#333333",
    status: false,
    date: 2023,
  },
];

function Education() {
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
                  boxShadow: 2,
                  p: 2,
                  borderRadius: "5px",
                  backgroundColor: "#eee",
                  // border: "3px solid #1976d2",
                  //backgroundImage: "url(" + e.backgroundI + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "100% 100%",
                }}
              >
                <Box>
                  {/* sx={{ color: e.backgroundC, filter: "invert(100%)" }} */}
                  <Box>
                    <Typography variant="h6">{e.name}</Typography>
                  </Box>
                  <Box sx={{ fontSize: "14px" }}>
                    <Box>
                      <Box>Источник: {e.place}</Box>
                    </Box>
                    <Box>
                      {e.status
                        ? "Окончено: " + e.date
                        : "Планируется: " + e.date}
                    </Box>
                  </Box>
                  <Box>
                    <ul>
                      {e.programm.map((p, i) => {
                        return <li key={i}>{p}</li>;
                      })}
                    </ul>
                  </Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none" }}
                    startIcon={<LinkIcon />}
                    onClick={() => {
                      if (e.status) window.open(e.certificate, "_blank");
                    }}
                  >
                    Сертификат
                  </Button>
                </Box>
              </Box>
            </Grow>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Education;
