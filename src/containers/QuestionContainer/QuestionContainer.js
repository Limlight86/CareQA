import React, { useContext } from "react"
import { AnswerContext } from "../../context/AnswerContext";
import Confirmation from '../../components/Confirmation'
import styles from "./QuestionContainer.module.css";

const QuestionContainer = ({ question, answer }) => {
  const { showAnswer, showConfirmation, setShowConfirmation } = useContext(AnswerContext)

  const handleClick = () =>{
    setShowConfirmation(true)
  }

  const containerStyle = [styles.qContainer, 'container']

  return (
    <div className={containerStyle.join(" ")}>
      {showConfirmation ? 
        <Confirmation 
          message={"Reveal the Answer?"} 
          type={"message"}/> : null
      }
      <p>{question}</p>
      <button className="btn btn-primary" disabled={showAnswer} onClick={handleClick}>
         {showAnswer ? "The Answer is..." : "Show Answer"}
      </button>
      {showAnswer ? <p className={styles.answer}>{answer}</p> : null}
    </div>
  )
}

export default QuestionContainer
