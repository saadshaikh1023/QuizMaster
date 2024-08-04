import React, { useState } from 'react';
import './Question.css';

function Question({ question, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const resetAnswer = () => {
    setSelectedAnswer(null);
  };

  const handleClick = (isCorrect, index) => {
    setSelectedAnswer(index);
    onAnswer(isCorrect, resetAnswer);
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question.questionText}</h2>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className={`answer-button ${
              selectedAnswer === index
                ? answer.isCorrect
                  ? 'correct'
                  : 'incorrect'
                : ''
            }`}
            onClick={() => handleClick(answer.isCorrect, index)}
            disabled={selectedAnswer !== null}
          >
            {answer.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
