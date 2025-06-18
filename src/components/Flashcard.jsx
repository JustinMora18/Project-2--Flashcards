import React, { useState } from 'react';
import './Flashcard.css'; // si ya tienes este archivo creado

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
            <p>{flipped ? answer : question}</p>
        </div>
    );
}

export default Flashcard;
