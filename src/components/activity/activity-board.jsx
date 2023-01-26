import React from "react";
import useGame from "../../hooks/room/use-game";
import RoomMillionaire from "./types/room-millionaire";

function ActivityBoard() {
  const [game] = useGame();
  const { acceptInput, questions, current, showAnswer } = game.context;
  const question = questions[current];
  return (
    <RoomMillionaire
      title={question.title}
      answers={question.answers}
      acceptInput={acceptInput}
      showAnswer={showAnswer}
    />
  );
}

export default ActivityBoard;
