import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import cx from "classnames";
import "./index.css";

function RoomAnswer({ selected, label, highlight, correct, ...props }) {
  return (
    <Box
      className={cx({ "room-answer": true, selected, highlight, correct })}
      border={3}
      borderColor="#eee"
      sx={{
        backgroundColor: " #000080",
        height: "50px",
        borderRadius: "10px",
      }}
      {...props}
    >
      <Typography color="#eee" sx={{ paddingTop: 1.5, paddingLeft: 2 }}>
        {label}
      </Typography>
    </Box>
  );
}

RoomAnswer.defaultProps = {
  selected: false,
  label: "",
  highlight: false,
  correct: false,
};

RoomAnswer.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.string,
  highlight: PropTypes.bool,
  correct: PropTypes.bool,
};

export default function RoomMillionaire({
  title,
  answers,
  acceptInput,
  showAnswer,
}) {
  const [selected, setSelected] = React.useState(null);
  const [a, b, c, d] = answers;
  const handleClickAnswer = (answer) => {
    if (acceptInput) setSelected(answer);
  };
  return (
    <Box
      className="million"
      sx={{
        position: "absolute",
        bottom: {
          xs: "30vh",
          md: "10vh",
        },
        height: "285px",
        width: "100%",
        zIndex: 1,
        opacity: 0.8,
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
          {title || "QUESTION"}
        </Typography>
      </Box>
      <Box mx={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <RoomAnswer
              label={`A: ${a.label}`}
              onClick={() => handleClickAnswer(a)}
              selected={selected === a}
              highlight={showAnswer}
              correct={a.correct}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RoomAnswer
              label={`B: ${b.label}`}
              onClick={() => handleClickAnswer(b)}
              selected={selected === b}
              highlight={showAnswer}
              correct={b.correct}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RoomAnswer
              label={`C: ${c.label}`}
              onClick={() => handleClickAnswer(c)}
              selected={selected === c}
              highlight={showAnswer}
              correct={c.correct}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RoomAnswer
              label={`D: ${d.label}`}
              onClick={() => handleClickAnswer(d)}
              selected={selected === d}
              highlight={showAnswer}
              correct={d.correct}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

RoomMillionaire.defaultProps = {
  title: "",
  answers: [],
  acceptInput: false,
  showAnswer: false,
};

RoomMillionaire.propTypes = {
  title: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.object),
  acceptInput: PropTypes.bool,
  showAnswer: PropTypes.bool,
};
