import React, { useState } from "react"
import Confirmation from '../Confirmation'
import styles from "./QuestionContainer.module.css";

const QuestionContainer = ({ question, answer, id, showAnswer}) => {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleClick = () =>{
    setShowConfirmation(true)
  }

  const containerStyle = [styles.qContainer, 'container']

  return (
    <div className={containerStyle.join(" ")}>
      {showConfirmation ? 
        <Confirmation 
          message={"Reveal the Answer?"} 
          type={"message"}
          id={id}/> : null
      }
      <p>{question}</p>
      <button className="btn btn-primary" disabled={false} onClick={handleClick}>
         {showAnswer ? "The Answer is..." : "Show Answer"}
      </button>
      {showAnswer ? <p className={styles.answer}>{answer}</p> : null}
    </div>
  )
}

export default QuestionContainer
