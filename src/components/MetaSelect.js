import React from "react"

function TextBox (props){
  let Question = <h1>{props.question.question}</h1>
 
  return (
    <div className="textBox">
    {Question}
    <form>
      Outros:<input type="text" />
      <input type="submit"/>
    </form>
    </div>
  )
}

export default TextBox