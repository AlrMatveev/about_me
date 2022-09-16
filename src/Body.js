import { Box, Container, Zoom } from "@mui/material";
import Header from "./Header";
import { CSSTransition } from "react-transition-group";

function Body({ pages, page }) {
  return (
    <Container maxWidth="md">
      <Box sx={{ position: "relative" }}>
        {pages.map((e) => {
          return (
            <CSSTransition
              in={e.name === page}
              timeout={1000}
              classNames="body"
              unmountOnExit
              mountOnEnter
              key={e.name}
            >
              <Box sx={{ position: "absolute", width: "100%", pb: 5 }}>
                <Header page={e.name} />
                {e.component}
              </Box>
            </CSSTransition>
          );
        })}
      </Box>
    </Container>
  );
}

export default Body;
