import React, { useContext } from "react"
import { QAContext } from "../../context/QAcontext";
import Confirmation from '../Confirmation'
import styles from "./QuestionContainer.module.css";

const QuestionContainer = ({ question, answer, id, showAnswer, confirmation }) => {
  const { questions, setQuestions } = useContext(QAContext)

  const handleClick = (id) =>{
    const newQuestions = questions;
    const index = newQuestions.findIndex(e => e.id === id);
    newQuestions[index].confirmation = true;
    setQuestions([...newQuestions])
  }

  const containerStyle = [styles.qContainer, 'container']

  return (
    <div className={containerStyle.join(" ")}>
      {confirmation ? 
        <Confirmation 
          message={"Reveal the Answer?"} 
          type={"message"}
          id={id}/> : null
      }
      <p>{question}</p>
      <button className="btn btn-primary" disabled={showAnswer} onClick={()=>handleClick(id)}>
         {showAnswer ? "The Answer is..." : "Show Answer"}
      </button>
      {showAnswer ? <p className={styles.answer}>{answer}</p> : null}
    </div>
  )
}

export default QuestionContainer
