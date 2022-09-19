import {
  Box,
  Button,
  Toolbar,
  IconButton,
  AppBar,
  Container,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Menu({ pages, setPage }) {
  const [mobile, setMobile] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobile]);

  const handleMobileMenu = () => {
    setMobile(!mobile);
  };

  const handleItemMenu = (page) => {
    setPage(page);
  };

  const style = {
    mobileMenu: {
      position: "fixed",
      zIndex: 1000,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.2)",
      backdropFilter: "blur(10px)",
    },
    itemsMM: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={mobile}
        timeout={500}
        classNames="mobile-menu"
        unmountOnExit
        mountOnEnter
      >
        <Box ref={nodeRef} sx={style.mobileMenu}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              width: "100vw",
            }}
          >
            <IconButton sx={{ color: "white" }} onClick={handleMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={style.itemsMM}>
            {pages.map((page, i) => {
              return (
                <Slide
                  key={i}
                  direction="up"
                  in={mobile}
                  style={{ transitionDelay: mobile ? 50 * i + "ms" : "0ms" }}
                >
                  <Button
                    variant="text"
                    sx={{ color: "white" }}
                    key={page.name}
                    onClick={() => {
                      handleMobileMenu();
                      handleItemMenu(page.name);
                    }}
                  >
                    {page.name}
                  </Button>
                </Slide>
              );
            })}
          </Box>
        </Box>
      </CSSTransition>

      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar variant="dense">
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                {pages.map((page) => {
                  return (
                    <Button
                      variant="text"
                      sx={{ color: "white" }}
                      key={page.name}
                      onClick={() => handleItemMenu(page.name)}
                    >
                      {page.name}
                    </Button>
                  );
                })}
              </Box>
              <Box sx={{ display: { md: "none", xs: "block" } }}>
                <IconButton sx={{ color: "white" }} onClick={handleMobileMenu}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <IconButton
                sx={{ color: "white" }}
                onClick={() =>
                  window.open(
                    "https://github.com/AlrMatveev/about_me",
                    "_blank"
                  )
                }
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Menu;
