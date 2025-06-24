import React, { useState } from 'react';
import './App.css'
import {flashcards} from './data/flashcards';
import Flashcard from './components/Flashcard';
import GuessBox from './components/GuessBox';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = flashcards[currentIndex]

  const goToNextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
      <div className='app'>
        <div className='content'>
          <h1>THE ULTIMATE<br />PROGRAMMING<br />BRAIN!</h1>

          <p className='description'>How well do you know your programming fundamentals? Test your dev knowledge with these flashcards!</p>

          <p className={`card-count ${currentCard.difficulty}`}>CARDS: {flashcards.length}</p>
        </div>

        <div className="flashcard-wrapper">
          <button 
            onClick={goToPrevCard} 
            disabled={currentIndex === 0}
            className={`nav-btn left ${currentCard.difficulty}`}
            >
            <span className="material-symbols-outlined">arrow_left</span>
          </button>
          
          <Flashcard 
            question={currentCard.question}
            answer={currentCard.answer}
            difficulty={currentCard.difficulty}
          />
          
          <button 
            onClick={goToNextCard} 
            disabled={currentIndex === flashcards.length - 1}
            className={`nav-btn right ${currentCard.difficulty}`}
            >
            <span className="material-symbols-outlined">arrow_right</span>
          </button>
        </div>
        
        <div className='GuessBox-container'>
          <GuessBox answer={currentCard.answer} />
        </div>

        <div className="legend">
          <div className="legend-item">
            <span className="color-box easy"></span> Easy
          </div>
          <div className="legend-item">
            <span className="color-box medium"></span> Medium
          </div>
          <div className="legend-item">
            <span className="color-box hard"></span> Hard
          </div>
        </div>
      </div>
  );
}

export default App


