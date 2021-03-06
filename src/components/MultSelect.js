import React from "react"
import TextBox from "./TextBox"

function MultSelect (props){
    let AnsArray = []
  let Question = <h1>{props.question.question}</h1>
  let Answer = props.question.answers.map((string) => <button onClick={() => {props.answerType(); AnsArray.push(string); console.log(AnsArray)}}>{string}</button>)
  return (
    <div className="multSelect">
    {Question}
    {Answer}
    <button onClick={() => {props.nextStep(AnsArray)}}>Concluido</button>
    </div>
  )
}

export default MultSelect