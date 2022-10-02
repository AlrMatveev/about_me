import { Box, Container, Zoom } from "@mui/material";
import Header from "./Header";
import { CSSTransition } from "react-transition-group";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import About from "./About";
import Technologies from "./Technologies";

function Body() {
  const pages = useSelector((state) => state.pages);
  return (
    <Container maxWidth="md">
      <Box sx={{ position: "relative" }}>
        {pages.status === "loaded" &&
          pages.data.map((e) => {
            return (
              <CSSTransition
                in={e.name === pages.activPage}
                timeout={1000}
                classNames="body"
                unmountOnExit
                mountOnEnter
                key={e.name}
              >
                <Box sx={{ position: "absolute", width: "100%", pb: 5 }}>
                  <Header page={e.name} />
                  {e.name === "About_me" && <About />}
                  {e.name === "Технологии" && <Technologies />}
                </Box>
              </CSSTransition>
            );
          })}
      </Box>
    </Container>
  );
}

export default Body;
