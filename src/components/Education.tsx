import React, { FC } from "react";
import Zoomer from "../hocs/Zoomer";
import { Grid, Box, Button, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

type IItem = {
  item: any;
  i: number;
};

const Education: FC<IItem> = ({ item, i }) => {
  return (
    <Grid item md={4} xs={6}>
      <Zoomer i={i}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{item[0]}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {item[1].source}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              variant="text"
              disabled={!item[1].ending}
              sx={{ textTransform: "none" }}
              startIcon={<LinkIcon />}
              onClick={() => {
                window.open(item[1].certificate, "_blank");
              }}
            >
              Certificate
            </Button>
          </Box>
        </Box>
      </Zoomer>
    </Grid>
  );
};

export default Education;
