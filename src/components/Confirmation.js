import React, { useContext } from "react";
import { AnswerContext } from "../context/AnswerContext"
import Notification from "./Notification";

const Confirmation = ({ message, type }) => {
   const {setShowAnswer, setShowConfirmation} = useContext(AnswerContext)

  const accept = () => {
    setShowAnswer(true)
    setShowConfirmation(false)
  };

  const decline = () => {
    setShowConfirmation(false)
  };

  return (
    <Notification message={message} type={type}>
      <div className="btn btn-primary" style={{marginRight:"16px"}} onClick={accept}>
        Yes Please
      </div>
      <div className="btn btn-danger" onClick={decline}>
        Not Yet
      </div>
    </Notification>
  );
};

export default Confirmation;
