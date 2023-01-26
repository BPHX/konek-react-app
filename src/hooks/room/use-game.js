import React, { createContext } from "react";
import PropTypes from "prop-types";

export const GameContext = createContext(null);

const initialState = {
  visible: false,
  context: null,
};

export const GameAction = {
  CONTEXT: "CONTEXT",
  SHOW_ANSWER: "SHOW_ANSWER",
  NEXT_QUESTION: "NEXT_QUESTION",
};

function GameReducer(state, { type, payload }) {
  if (!state) return initialState;
  if (!type) return state;

  const newState = { ...state };
  switch (type) {
    case GameAction.CONTEXT:
      newState.context = payload;
      newState.visible = !!payload;
      break;
    case GameAction.SHOW_ANSWER:
      if (state.context)
        newState.context = {
          ...state.context,
          showAnswer: true,
          acceptInput: false,
        };
      break;
    case GameAction.NEXT_QUESTION:
      if (
        state.context &&
        (state.context?.current || 0) + 1 < state.context?.questions?.length
      )
        newState.context = {
          ...state.context,
          current: state.context.current + 1,
          acceptInput: true,
          showAnswer: false,
        };

      break;
    default:
      return state;
  }

  return newState;
}

export function GameProvider({ children }) {
  const [state, dispatch] = React.useReducer(GameReducer, initialState);
  const value = React.useMemo(() => {
    function initGame(context) {
      dispatch({ type: GameAction.CONTEXT, payload: context || {} });
    }

    function endGame() {
      dispatch({ type: GameAction.CONTEXT, payload: null });
    }

    function showAnswer() {
      dispatch({ type: GameAction.SHOW_ANSWER });
    }

    function nextQuestion() {
      dispatch({ type: GameAction.NEXT_QUESTION });
    }

    return [state, { initGame, endGame, showAnswer, nextQuestion }];
  }, [state, dispatch]);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const GameConsumer = GameContext.Consumer;

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function useGame() {
  const context = React.useContext(GameContext);
  if (!context)
    throw new Error(
      "This hook should only be use inside ConfigProvider instance"
    );
  return context;
}

export function withGame(Element) {
  return function ElementWithToken() {
    return (
      <GameProvider>
        <Element />
      </GameProvider>
    );
  };
}
