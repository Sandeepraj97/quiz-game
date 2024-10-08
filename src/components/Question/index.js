import React from 'react';
import './index.css';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="question-container">
      <h2 className='question-part'>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button className='answer-btn' key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
