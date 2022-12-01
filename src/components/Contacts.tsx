import { useEffect, useState } from "react";
import { Box, Grow, Typography } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

const items = [
  {
    text: "Московкая область г.Балашиха",
    icon: <LocationCityIcon />,
    link: false,
  },
  {
    text: "+7 (977) 375-92-82",
    icon: <PhoneAndroidIcon />,
    link: false,
  },
  {
    text: "kareroyal@gmail.com",
    icon: <EmailIcon />,
    link: false,
  },
  {
    text: "Github",
    icon: <GitHubIcon />,
    link: "https://github.com/AlrMatveev",
  },
  {
    text: "Codepen",
    icon: <ViewInArIcon />,
    link: "https://codepen.io/kandur",
  },
];

function Contacts() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 0);
  }, []);

  const style = {
    box: { display: "flex", m: 1 },
    text: { alignItems: "center", ml: 1 },
    icon: { justifyContent: "center" },
  };

  return (
    <Box>
      {items.map((e: any, i) => {
        return (
          <Grow
            in={load}
            key={i}
            style={{
              transformOrigin: "0 50% 0",
              transitionDelay: 100 * i + "ms",
            }}
            {...(load ? { timeout: 1000 } : {})}
          >
            <Box sx={style.box}>
              <Box sx={style.icon}>{e.icon}</Box>
              <Typography
                variant="body1"
                sx={style.text}
                style={e.link ? { cursor: "pointer" } : { cursor: "default" }}
                onClick={() => {
                  if (e.link) window.open(e.link, "_blank");
                }}
              >
                {e.text}
              </Typography>
            </Box>
          </Grow>
        );
      })}
    </Box>
  );
}

export default Contacts;
