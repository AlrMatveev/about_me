import React from "react";
import { useTrail, animated, config } from "react-spring";

const text: string[] = [
  "Приветствую! Меня зовут Адександр, и у меня серьезная страсть к React'у и анимации, созданию интуитивно понятного и динамичного пользовательского интерфейса.",
  "Хорошо организованный человек, независимый сотрудник с большим вниманием к деталям. Фанат Рок-н-Ролла, активного отдыха и природы. Семейный человек и отец двух капризных мальчиков-близнецов.",
  "Интересуетесь всем спектром фронтенда и хочу работать над амбициозными проектами с позитивными людьми.",
];

const About = () => {
  const trail = useTrail(text.length, {
    config: config.stiff,
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
    delay: 200,
  });
  return (
    <div style={{ padding: "10px 20px" }}>
      {trail.map(({ x, ...otherProps }, i) => (
        <animated.div
          key={i}
          style={{
            ...otherProps,
            transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
          }}
        >
          <animated.div>
            <p>{text[i]}</p>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default About;
