import {
  Box,
  Button,
  Toolbar,
  IconButton,
  AppBar,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

function Menu({ pages, setPage }) {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              {pages.map((page) => {
                return (
                  <Button
                    variant="text"
                    sx={{ color: "white" }}
                    key={page.name}
                    onClick={() => {
                      setPage(page.name);
                    }}
                  >
                    {page.name}
                  </Button>
                );
              })}
            </Box>
            <Box sx={{ display: { md: "none", xs: "block" } }}>
              <IconButton sx={{ color: "white" }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <IconButton sx={{ color: "white" }}>
              <GitHubIcon
                onClick={() =>
                  window.open(
                    "https://github.com/AlrMatveev/about_me",
                    "_blank"
                  )
                }
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Menu;
