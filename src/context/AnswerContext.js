import React, { createContext, useState } from "react";

const AnswerContext = createContext();

const AnswerContextProvider = ({ children }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <AnswerContext.Provider value={{ showAnswer, setShowAnswer, showConfirmation, setShowConfirmation }}>
      {children}
    </AnswerContext.Provider>
  );
};

export { AnswerContext, AnswerContextProvider };