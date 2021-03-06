import React, {useState} from 'react';
import './App.css';
import OneSelect from './components/OneSelect.js'
import MultSelect from './components/MultSelect.js'
import Data from './data.js'
import TextBox from "./components/TextBox.js"

const questionaires = []
let allAnswers = []

const App = () => {
  const [current, setCurrent] = useState(0)
  
  const nextStep = (answer) => {
    allAnswers.push(answer)
    console.log(allAnswers)
    let isLast = (current === Data.length - 1)
    return isLast ? closeQuestionaire() : (setCurrent(current + 1),currentComponent=selectComponent(), console.log(currentComponent))
  }

  const closeQuestionaire = () => {
    questionaires.push(allAnswers)
    allAnswers = []
    setCurrent(0)
    console.table(questionaires)
  }

  const answerType = (answer) => {
    if (answer === "Outros:")
    return <TextBox/>
  }
    
  let currentQuestion = Data[current]
    console.log(current)
    
  const selectComponent = () => { 
    let currentComponent   
    if (Data[current].type === "Simple")
    {currentComponent = <OneSelect key={currentQuestion.id} question={currentQuestion} nextStep={nextStep} answerType={answerType} />}
    else if (Data[current].type === "Multiple")
    {currentComponent = <MultSelect key={currentQuestion.id} question={currentQuestion} nextStep={nextStep} answerType={answerType} />}    
    console.log(currentComponent)
    return currentComponent}
    let currentComponent=selectComponent()
    return (
      <div className="App">
        {currentComponent}
      </div>
    );
  
}


export default App;
