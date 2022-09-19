import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import avatar from "./avatar.png";

function AvatarCss({ load }) {
  return (
    <Box sx={{ position: "relative", margin: "auto" }}>
      <CSSTransition
        in={load > 0}
        timeout={1000}
        classNames="avatarRamka"
        unmountOnExit
        mountOnEnter
      >
        <Box
          sx={{
            position: "absolute",
            top: "-6px",
            left: "-6px",
            width: "262px",
            height: "262px",
            borderRadius: "50%",
            backgroundColor: "#1976d2",
            zIndex: "-1",
          }}
        ></Box>
      </CSSTransition>
      <CSSTransition
        in={load > -1}
        timeout={1000}
        classNames="avatar"
        unmountOnExit
        mountOnEnter
      >
        <Box
          sx={{
            width: "250px",
            height: "250px",
            backdropFilter: "blur(10px)",
            backgroundImage: "url(" + avatar + ")",
            //backgroundOrigin: "padding-box",
            backgroundRepeat: "no-repeat",
            //border: "3px solid #1976d2",
            // backgroundSize: "100%",
            backgroundPosition: "center",
            borderRadius: "50%",
            boxShadow: "inset 0px 0px 10px rgba(0,0,0,1)",
            zIndex: "2",
          }}
        ></Box>
      </CSSTransition>
    </Box>
  );
}

export default AvatarCss;
