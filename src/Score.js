import React from 'react';
import './Score.css';

function Score({ userAnswers, questions, restartGame }) {
  const correctAnswers = userAnswers.filter(Boolean).length;

  return (
    <div className="score-container">
      <h2 className="score-text">
        You scored {correctAnswers} out of {questions.length}
      </h2>
      <button className="restart-button" onClick={restartGame}>Restart</button>
    </div>
  );
}

export default Score;
