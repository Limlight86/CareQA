import React, { useContext } from "react";
import { QAContext } from "../context/QAcontext";
import QuestionContainer from "./QuestionContainer/QuestionContainer";

const QuestionList = () => {
  const { questions } = useContext(QAContext);

  return (
    <div>
      {questions.map(e => {
        return (
          <QuestionContainer
            key={e.id}
            question={e.question}
            answer={e.answer}
            id={e.id}
            showAnswer={e.showAnswer}
            confirmation={e.confirmation}
          />
        );
      })}
    </div>
  );
};

export default QuestionList;
