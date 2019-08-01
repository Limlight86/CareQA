import React, { useContext } from "react";
import { QAContext } from "../context/QAcontext";
import { AnswerContextProvider } from "../context/AnswerContext";
import QuestionContainer from "./QuestionContainer/QuestionContainer";

const QuestionList = () => {
  const { questions } = useContext(QAContext);

  return (
    <div>
      {questions.map(e => {
        return (
          <AnswerContextProvider key={e.id}>
            <QuestionContainer
              question={e.question}
              answer={e.answer}
            />
          </AnswerContextProvider>
        );
      })}
    </div>
  );
};

export default QuestionList;
