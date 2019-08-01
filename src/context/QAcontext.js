import React, { createContext, useState } from "react";

const QAContext = createContext();

const QAContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
      {
        id: 1,
        question: "What is the average the airspeed velocity of a (European) unladen swallow?",
        answer: "11 meters per second",
      },
      {
        id: 2,
        question: "What job does Laz want?",
        answer: "CareCloud Associate React Dev",
      },
      {
        id: 3,
        question: "Why should we hire him?",
        answer: "He will commit 110% to mastering the CareCloud UI tech stack, I am worth the investment!",
      }
    ])

  return (
    <QAContext.Provider value={{questions, setQuestions}}>
      {children}
    </QAContext.Provider>
  );
};

export { QAContext, QAContextProvider };
