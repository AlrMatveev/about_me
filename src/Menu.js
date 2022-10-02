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
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "./redux/pagesSlice";

function Menu() {
  const [mobile, setMobile] = useState(false);
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);

  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobile]);

  console.log(pages);

  const handleMobileMenu = () => {
    setMobile(!mobile);
  };

  const handleItemMenu = (page) => {
    dispatch(setPage(page));
  };

  const style = {
    mobileMenu: {
      position: "fixed",
      zIndex: 1000,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.2)",
      backdropFilter: "blur(10px)",
    },
    itemsMM: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-20px",
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
              top: "10px",
            }}
          >
            <IconButton sx={{ color: "white" }} onClick={handleMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={style.itemsMM}>
            {pages.status === "loaded" &&
              pages.data.map((page, i) => {
                return (
                  <Slide
                    key={page.id}
                    direction="up"
                    in={mobile}
                    style={{ transitionDelay: mobile ? 50 * i + "ms" : "0ms" }}
                  >
                    <Button
                      variant="text"
                      sx={{ color: "white" }}
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
        <CSSTransition
          nodeRef={nodeRef2}
          in={pages.status === "loaded"}
          timeout={500}
          classNames="mobile-menu"
          unmountOnExit
          mountOnEnter
        >
          <Container ref={nodeRef2} maxWidth="md">
            <Toolbar variant="dense">
              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: { md: "block", xs: "none" } }}>
                  {pages.status === "loaded" &&
                    pages.data.map((page, i) => {
                      return (
                        <Button
                          key={page.id}
                          variant="text"
                          sx={{ color: "white" }}
                          onClick={() => handleItemMenu(page.name)}
                        >
                          {page.name}
                        </Button>
                      );
                    })}
                </Box>
                <Box sx={{ display: { md: "none", xs: "block" } }}>
                  <IconButton
                    sx={{ color: "white" }}
                    onClick={handleMobileMenu}
                  >
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
        </CSSTransition>
      </AppBar>
    </>
  );
}

export default Menu;
