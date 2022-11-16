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
  console.log(item);
  const transitions = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,
    config: config.molasses,
  });
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute" }}>
        {transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <div
                  style={{
                    width: "263px",
                    height: "263px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                    zIndex: 4998,
                  }}
                ></div>
              </animated.div>
            )
        )}
      </div>
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundImage: "url(" + avatar + ")",
          borderRadius: "50%",
          zIndex: 4999,
        }}
      ></div>
    </div>
  );
};

export default Avatar;
