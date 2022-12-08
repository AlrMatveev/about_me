import React from "react";
import { useTrail, animated, config } from "react-spring";
import { Typography, Box, Divider } from "@mui/material";

const text: string[] = [
  "Приветствую! Меня зовут Адександр, и у меня серьезная страсть к React'у и анимации, созданию интуитивно понятного и динамичного пользовательского интерфейса.",
  "Хорошо организованный человек, независимый сотрудник с большим вниманием к деталям. Фанат рок-н-ролла, активного отдыха и природы. Семейный человек и отец двух капризных мальчиков-близнецов.",
  "Интересуетесь всем спектром фронтенда и хочу работать над амбициозными проектами с позитивными людьми.",
];

const About = () => {
  const trail = useTrail(text.length, {
    config: config.stiff,
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 200,
  });
  return (
    <Box
      sx={{
        mt: { xs: "13px", md: "0px" },
        ml: { xs: "0px", md: "5px" },
        textAlign: { xs: "center", md: "left" },
        //pt: { sx: "40px", md: "0" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {trail.map(({ y, ...otherProps }, i) => (
        <animated.div
          key={i}
          style={{
            ...otherProps,
            transform: y.interpolate((y) => `translate3d(0,${y}px, 0)`),
          }}
        >
          <animated.div>
            <Typography variant="body1" sx={{ p: 1 }}>
              {text[i]}
            </Typography>
            {trail.length - 1 !== i && <Divider />}
          </animated.div>
        </animated.div>
      ))}
    </Box>
  );
};

export default About;
