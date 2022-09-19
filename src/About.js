import { Box, Grow } from "@mui/material";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import AvatarCss from "./AvatarCss";

const text = [
  "Приветствую! Меня зовут Адександр, и у меня серьезная страсть к React'у и анимации, созданию интуитивно понятного и динамичного пользовательского интерфейса.",
  "Хорошо организованный человек, независимый сотрудник с большим вниманием к деталям. Фанат Рок-н-Ролла, активного отдыха и природы. Семейный человек и отец двух капризных мальчиков-близнецов.",
  "Интересуетесь всем спектром фронтенда и хочу работать над амбициозными проектами с позитивными людьми.",
];

function About() {
  const [load, setLoad] = useState(-1);
  useEffect(() => {
    setTimeout(() => {
      text.map((e, i) => {
        setTimeout(() => {
          setLoad(i);
        }, 200 * i);
      });
    }, 1000);
  }, []);

  return (
    <Box sx={{ display: { xs: "block", md: "flex" } }}>
      <Box
        sx={{
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "cneter",
        }}
      >
        <AvatarCss load={load} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          ml: { xs: 0, md: 2 },
          mt: { xs: 5, md: 3 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {text.map((e, i) => {
          return (
            <Grow
              in={load > 0}
              key={i}
              sx={{
                transformOrigin: { md: "0 50% 0", xs: "50% 50% 50%" },
                p: 0.5,
              }}
              style={{ transitionDelay: 200 * i + "ms" }}
              {...(load ? { timeout: 1000 } : {})}
            >
              <Box>{e}</Box>
            </Grow>
          );
        })}
      </Box>
    </Box>
  );
}

export default About;
