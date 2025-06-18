import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ question, answer, difficulty }) {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
    setFlipped(!flipped);
    };

    const cardColor = {
        easy: 'card-easy',
        medium: 'card-medium',
        hard: 'card-hard',
    }[difficulty];

    return (
        <div 
            className={`flashcard ${cardColor} ${flipped ? 'flipped' : ''}`}
            onClick={handleClick}
        >
            <div className="flashcard-front">
                <p>{question}</p>
            </div>
            <div className="flashcard-back">
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default Flashcard;
