import React from "react"

const Question = ({ question, nextStep }) => {
  return (<div className="message-container">
    <div className="message">
      <h1 className="question">{question.question}</h1>
      <div className="button-container">
        {
          question.answers.map((answer, index) => {
            return <div key={index} className="divButton">
              <button className="button" onClick={() => nextStep(answer)} key={index}>
                {answer}
              </button>
            </div>
          })
        }
      </div>
    </div>
  </div>)
}
export default Question