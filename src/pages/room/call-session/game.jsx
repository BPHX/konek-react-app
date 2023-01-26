import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import VideogameAssetOffIcon from "@mui/icons-material/VideogameAssetOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import useGame from "../../../hooks/room/use-game";

export default function RoomGame() {
  const [game, service] = useGame();

  const handleGame = () => {
    if (game.visible) {
      service.endGame();
    } else {
      service.initGame({
        type: "Millionaire",
        acceptInput: true,
        showAnswer: false,
        current: 0,
        questions: [
          {
            title: "KALBO",
            answers: [
              { label: "qwe", correct: false },
              { label: "correct", correct: true },
              { label: "zxc", correct: false },
              { label: "vbn", correct: false },
            ],
          },
          {
            title: "PANOTS",
            answers: [
              { label: "qwe", correct: false },
              { label: "zxc", correct: false },
              { label: "vbn", correct: false },
              { label: "correct", correct: true },
            ],
          },
          {
            title: "JUDE",
            answers: [
              { label: "correct", correct: true },
              { label: "qwe", correct: false },
              { label: "zxc", correct: false },
              { label: "vbn", correct: false },
            ],
          },
        ],
      });
    }
  };

  const handleShowAnswer = () => {
    service.showAnswer();
  };

  const handleNextQuestion = () => {
    service.nextQuestion();
  };

  const theme = useTheme();
  return (
    <Box>
      <IconButton
        onClick={handleGame}
        size="large"
        sx={{ color: theme.palette.primary.main }}
      >
        {game?.visible ? <VideogameAssetIcon /> : <VideogameAssetOffIcon />}
      </IconButton>
      <IconButton
        onClick={handleShowAnswer}
        size="large"
        sx={{ color: theme.palette.primary.main }}
      >
        <VisibilityIcon />
      </IconButton>
      <IconButton
        onClick={handleNextQuestion}
        size="large"
        sx={{ color: theme.palette.primary.main }}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}
