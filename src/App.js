import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import questions from './questions.json';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect, resetAnswer) => {
    setUserAnswers([...userAnswers, isCorrect]);
    if (isCorrect) {
      setScore(score + 1);
    }
    setTimeout(() => {
      resetAnswer(); // Reset the selected answer
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      <div className="scoreboard">Score: {score}</div>
      {showScore ? (
        <Score userAnswers={userAnswers} questions={questions} restartGame={restartGame} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
