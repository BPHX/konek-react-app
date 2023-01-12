import React from "react";
import { Avatar, Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

export default function RoomParticipant({ image, name }) {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={3}>
      <Box
        sx={{
          height: "100%",
          marginLeft: 2,
          marginRight: 2,
          marginBottom: 2,
          backgroundColor: theme.palette.gray.dark,
          color: theme.palette.white.main,
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            alt="Remy Sharp"
            src={image}
            sx={{ mt: 2, mb: 1, width: 80, height: 80 }}
          />
          {name}
        </Grid>
      </Box>
    </Grid>
  );
}

RoomParticipant.defaultProps = {
  image: null,
};
// Typechecking props of the MDAlert
RoomParticipant.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
};
