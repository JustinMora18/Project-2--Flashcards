import React, { useState } from 'react';
import './App.css'
import {flashcards} from './data/flashcards';
import Flashcard from './components/Flashcard';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = flashcards[currentIndex]

  return (
      <div className='app'>
        <h1>The Ultimate Programming Brain!</h1>
        <p className='description'>How well do you know your programming fundamentals? Test your dev knowledge with these flashcards!</p>

        <Flashcard 
        question={currentCard.question}
        answer={currentCard.answer}
        difficulty={currentCard.difficulty}
        />
      </div>
  );
}

export default App
