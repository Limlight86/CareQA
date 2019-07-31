import React, { useContext } from "react";
import { QAContext } from "../context/QAcontext";
import Notification from "./Notification";

const Confirmation = ({ message, type, id }) => {
  const { questions, setQuestions } = useContext(QAContext);

  const accept = (id) => {
    const newQuestions = questions;
    const index = newQuestions.findIndex(e => e.id === id);
    newQuestions[index].showAnswer = true;
    newQuestions[index].confirmation = false;
    setQuestions([...newQuestions]);
  };

  const decline = (id) => {
    const newQuestions = questions;
    const index = newQuestions.findIndex(e => e.id === id);
    newQuestions[index].confirmation = false;
    setQuestions([...newQuestions]);
  };

  return (
    <Notification message={message} type={type}>
      <div className="btn btn-primary" style={{marginRight:"16px"}} onClick={() => accept(id)}>
        Yes Please
      </div>
      <div className="btn btn-danger" onClick={() => decline(id)}>
        Not Yet
      </div>
    </Notification>
  );
};

export default Confirmation;
