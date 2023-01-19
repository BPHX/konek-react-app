import React, { createContext } from "react";
import PropTypes from "prop-types";

export const ChatContext = createContext(null);

const initialState = {
  visible: true,
  messages: [],
};

export const ChatAction = {
  MESSAGES: "MESSAGES",
  VISIBILITY: "VISIBILITY",
};

function chatReducer(state, { type, payload }) {
  if (!state) return initialState;
  if (!type) return state;

  const newState = { ...state };
  switch (type) {
    case ChatAction.MESSAGES:
      newState.messages = payload;
      break;
    case ChatAction.VISIBILITY:
      newState.visible = payload;
      break;
    default:
      return state;
  }

  return newState;
}

export function ChatProvider({ children }) {
  const [state, dispatch] = React.useReducer(chatReducer, initialState);
  const value = React.useMemo(() => {
    function updateMessages(messages) {
      dispatch({ type: ChatAction.MESSAGES, payload: messages || [] });
    }

    function addMessage(message) {
      const messages = state?.messages || [];
      messages.push(message);
      dispatch({ type: ChatAction.MESSAGES, payload: messages });
    }

    function setVisible(visible) {
      dispatch({ type: ChatAction.VISIBILITY, payload: visible });
    }

    return [state, { addMessage, updateMessages, setVisible }];
  }, [state, dispatch]);
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export const ChatConsumer = ChatContext.Consumer;

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function useChat() {
  const context = React.useContext(ChatContext);
  if (!context)
    throw new Error(
      "This hook should only be use inside ConfigProvider instance"
    );
  return context;
}

export function withChat(Element) {
  return function ElementWithToken() {
    return (
      <ChatProvider>
        <Element />
      </ChatProvider>
    );
  };
}
