import React, { useState } from 'react';
import './App.css';
import data from './data'
import Question from './components/question';

const questionaires = []
let allAnswers = []

function App() {
  const [current, setCurrent] = useState(0)
  const nextStep = (answer) => {
    allAnswers.push(answer)
    console.table(allAnswers)
    let isLast = (current === data.length - 1)
    return isLast ? closeQuestionaire() : setCurrent(current + 1)
  }
  const closeQuestionaire = () => {
    questionaires.push(allAnswers)
    allAnswers = []
    setCurrent(0)
    console.table(questionaires)
  }
  let currentQuestion = data[current]
  return (
    <div className="App">
      <div className="logo">
      </div>
      <Question question={currentQuestion} nextStep={nextStep} />


    </div>
  );
}

export default App;
