import React, { useState } from 'react';
import './App.css'
import {flashcards} from './data/flashcards';
import Flashcard from './components/Flashcard';

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
        <h1>The Ultimate Programming Brain!</h1>
        
        <p className='description'>How well do you know your programming fundamentals? Test your dev knowledge with these flashcards!</p>

        <p className="card-count">CARDS: {flashcards.length}</p>

        <Flashcard 
        question={currentCard.question}
        answer={currentCard.answer}
        difficulty={currentCard.difficulty}
        />

        <div className="navigation">
          <button onClick={goToPrevCard} disabled={currentIndex === 0}>
            <span className="material-symbols-outlined">arrow_left</span>
          </button>
          <button onClick={goToNextCard} disabled={currentIndex === flashcards.length - 1}>
            <span className="material-symbols-outlined">arrow_right</span>
          </button>
        </div>
      </div>
  );
}

export default App


