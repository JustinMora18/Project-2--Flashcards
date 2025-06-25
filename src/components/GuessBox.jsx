import React, { useState } from 'react';
import './GuessBox.css';

function GuessBox({ answer, difficulty }) {
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const checkAnswer = ()=> {
        const cleanedUserAnswer = userAnswer.trim().toLowerCase();
        const cleanedCorrectAnswer = answer.trim().toLowerCase();

        const isAnswerCorrect = cleanedUserAnswer == cleanedCorrectAnswer;
        setIsCorrect(isAnswerCorrect);

        const body = document.body;
        body.classList.add(isAnswerCorrect ? 'correct-border' : 'incorrect-border');

        setTimeout(() => {
            body.classList.remove('correct-border', 'incorrect-border');
        }, 2000);
    }

    return (
        <>
            <div className="guess-box">
                <p className={`guessLabel ${difficulty}`}>Guess your answer here: </p>
                <div className='inputNBtnContainer'>
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Type Something!" />

                    <button onClick={checkAnswer}>SUBMIT</button>
                </div>

                {isCorrect !== null && (
                    <p className={`result-text ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? 'CORRECT' : 'WRONG'}
                    </p>
                )}
            </div>
        </>
    );
}

export default GuessBox;