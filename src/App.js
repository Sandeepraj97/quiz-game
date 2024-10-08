import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import MobileScreen from './components/MobileScreen';
import Question from './components/Question';
import './App.css';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    { question: 'What is 2 + 2?', options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'], correct: "B. 4" },
    { question: 'Capital of India?', options: ['A. Mumbai', 'B. Chennai', 'C. Delhi', 'D. Hydrabad'], correct: 'C. Delhi' },
    { question: 'Which planet in the Milky Way is the hottest?', options: ['A. Venus', 'B. Earth', 'C. Pluto', 'D. Mars'], correct: 'A. Venus' },
    { question: 'To which continent does India belong?', options: ['A. Asia', 'B. Aferica', 'C. Nortn America', 'D. Europe'], correct: 'A. Asia' },
    { question: 'The Thar Desert in India is also known as what?', options: ['A. Asia', 'B. Aferica', 'C. Nortn America', 'D. Europe'], correct: 'A. Asia' }

  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handlePlayerJoin = (playerName) => {
    setPlayers([...players, playerName]);
  };

  const handleAnswer = (selectedAnswer) => {
    console.log(selectedAnswer)
    if (selectedAnswer === currentQuestion.correct) {
     alert('Correct!');

      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Wrong answer!');
    }
  };

  if (currentQuestionIndex >= questions.length) {
    return <h1 className='game-over'>Game Over! Thanks for playing .</h1>;
  }

  return (
    <div className='main-bg'>
      <div className="app-container">
        <MainScreen players={players} />
        <MobileScreen onJoin={handlePlayerJoin} />
        <Question question={currentQuestion} onAnswer={handleAnswer} />
      </div>
    </div>
  );
};

export default App;
