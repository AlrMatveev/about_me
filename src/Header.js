import { Typography } from "@mui/material";
import { Grow } from "@mui/material";

function Header({ page }) {
  return (
    <Typography variant="h3" sx={{ pl: 1, pt: 4, pb: 4, display: "flex" }}>
      {page.split("").map((l, i) => {
        return (
          <Grow
            key={l}
            in={true}
            style={{
              transformOrigin: "0 50% 50%",
              transitionDelay: 70 * i + "ms",
            }}
            {...{ timeout: 1000 }}
          >
            <span>{l}</span>
          </Grow>
        );
      })}
    </Typography>
  );
}

export default Header;
