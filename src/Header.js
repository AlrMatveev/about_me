import { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Typography } from "@mui/material";

function Header({ page }) {
  const [leters, setLeters] = useState("");

  const refContainer = useRef("");

  useEffect(() => {
    const arr = page.split("");
    refContainer.current = "";
    setLeters("");
    arr.map((e, i) => {
      setTimeout(() => {
        refContainer.current += e;
        setLeters(refContainer.current);
      }, 150 * i);
    });
  }, [page]);

  return (
    <Typography variant="h3" sx={{ pl: 1, pt: 4, pb: 4 }}>
      <TransitionGroup style={{ display: "flex" }}>
        {leters.split("").map((e, i) => {
          return (
            <CSSTransition key={i} timeout={1000} classNames="headerT">
              <div>{e}</div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Typography>
  );
}

export default Header;
