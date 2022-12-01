import React, { FC, useState, useEffect } from "react";
import avatar from "../images/avatar.png";
import { useTransition, animated, config } from "react-spring";

interface IAvatarProps {
  href: string;
}

const Avatar: FC = () => {
  const [item, setItem] = useState(-1);
  useEffect(() => {
    setTimeout(() => {
      setItem(item + 1);
    }, 500);
  }, []);

  const transitions = useTransition(true, {
    from: { opacity: 0, transform: "scale(0.5)" },
    enter: { opacity: 1, transform: "scale(1)" },
    delay: 0,
    config: config.wobbly,
  });
  const transitions2 = useTransition(true, {
    from: { opacity: 0, filter: "blur(13px)" },
    enter: { opacity: 1, filter: "blur(0px)" },
    delay: 200,
    config: config.slow,
  });
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "-7.5px", left: "-7.5px" }}>
        {transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <div
                  style={{
                    width: "249px",
                    height: "249px",
                    borderRadius: "50%",
                    border: "8px solid darkgray",
                    backgroundColor: "darkgray",
                    zIndex: -1,
                  }}
                ></div>
              </animated.div>
            )
        )}
      </div>
      {transitions2(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  backgroundImage: "url(" + avatar + ")",
                  borderRadius: "50%",
                  zIndex: 4999,
                  boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.9)",
                }}
              ></div>
            </animated.div>
          )
      )}
    </div>
  );
};

export default Avatar;
