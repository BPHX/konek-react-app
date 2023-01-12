import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";

export default function RoomMillionaire({ title, answer }) {
  return (
    <Box
      className="million"
      sx={{
        position: "absolute",
        top: "50%",
        height: "285px",
        width: "100%",
        zIndex: 1,
        opacity: 0.5,
      }}
    >
      <Box
        mb={2}
        mt={3}
        mx={5}
        border={3}
        borderColor="#eee"
        sx={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "100px",
          height: "100%",
          backgroundColor: "#000080",
          borderRadius: "10px",
        }}
      >
        <Typography color="#E5E4E2" variant="h5" pt={1}>
          {title} QUESTION
        </Typography>
      </Box>
      <Box mx={5}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              border={3}
              borderColor="#eee"
              sx={{
                backgroundColor: " #000080",
                height: "50px",
                borderRadius: "10px",
              }}
            >
              <Typography color="#eee" sx={{ paddingTop: 1.5, paddingLeft: 2 }}>
                A:
                {answer}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              border={3}
              borderColor="#eee"
              sx={{
                backgroundColor: " #000080",
                height: "50px",
                borderRadius: "10px",
              }}
            >
              <Typography color="#eee" sx={{ paddingTop: 1.5, paddingLeft: 2 }}>
                B:
                {answer}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              border={3}
              borderColor="#eee"
              sx={{
                backgroundColor: " #000080",
                height: "50px",
                borderRadius: "10px",
              }}
            >
              <Typography color="#eee" sx={{ paddingTop: 1.5, paddingLeft: 2 }}>
                C:
                {answer}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              border={3}
              borderColor="#eee"
              sx={{
                backgroundColor: " #000080",
                height: "50px",
                borderRadius: "10px",
              }}
            >
              <Typography color="#eee" sx={{ paddingTop: 1.5, paddingLeft: 2 }}>
                D:
                {answer}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

RoomMillionaire.defaultProps = {
  title: "",
  answer: "",
};
// Typechecking props of the MDAlert
RoomMillionaire.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
};
