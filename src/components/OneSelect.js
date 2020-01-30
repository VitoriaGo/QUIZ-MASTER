import React from "react"

function OneSelect (props){
  let Question = <h1>{props.question.question}</h1>
  let Answer = props.question.answers.map((answer, index) => <div key={index} className="divButton"><button className="button" key={index} onClick={() => props.nextStep(answer)}>{answer}</button></div>
  )
  return (
    <div className="oneSelect">
    {Question}
    {Answer}
    </div>
  )
}

export default OneSelect