import React, { useState } from 'react';
import Wordinputrow from './Wordinputrow';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import { validWords, validWordsArray } from './validWords';

function Wordle() {
    const [target] = useState(() =>
        validWordsArray[Math.floor(Math.random() * validWordsArray.length)].toUpperCase()
    );

    const [guesses, setGuesses] = useState(Array(6).fill(''));
    const [colors, setColors] = useState(Array(6).fill(Array(5).fill('')));
    const [activeRow, setActiveRow] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isWin, setIsWin] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [width, height] = useWindowSize();

    const handleGuessChange = (val) => {
        const newGuesses = [...guesses];
        newGuesses[activeRow] = val;
        setGuesses(newGuesses);
        setErrorMsg(''); // Clear error when user types
    };

    const handleEnter = () => {
        const guess = guesses[activeRow];
        if (guess.length !== 5) return;

        if (!validWords.has(guess.toLowerCase())) {
            setErrorMsg("❌ Not a valid word!");
            return;
        }

        const targetArr = target.split('');
        const guessArr = guess.split('');
        const rowColors = Array(5).fill('black');
        const used = Array(5).fill(false);

        for (let i = 0; i < 5; i++) {
            if (guessArr[i] === targetArr[i]) {
                rowColors[i] = 'green';
                used[i] = true;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (rowColors[i] === 'green') continue;
            for (let j = 0; j < 5; j++) {
                if (!used[j] && guessArr[i] === targetArr[j]) {
                    rowColors[i] = 'orange';
                    used[j] = true;
                    break;
                }
            }
        }

        const newColors = [...colors];
        newColors[activeRow] = rowColors;
        setColors(newColors);

        if (rowColors.every(c => c === 'green')) {
            setIsWin(true);
            setIsGameOver(true);
            return;
        }

        if (activeRow === 5) {
            setIsGameOver(true);
            return;
        }

        if (activeRow < 5) {
            setActiveRow(activeRow + 1);
        }
    };

    return (
        <div className="mt-10 flex flex-col items-center">
            {isWin && <Confetti width={width} height={height} numberOfPieces={250} recycle={false} />}



            {[...Array(6)].map((_, i) => (
                <Wordinputrow
                    key={i}
                    guess={guesses[i]}
                    colors={colors[i]}
                    isActive={!isGameOver && i === activeRow}
                    onChange={handleGuessChange}
                    onEnter={handleEnter}
                />
            ))}

            {errorMsg && (
                <div className="text-center mt-6 text-2xl font-bold text-red-600">
                    {errorMsg}
                </div>
            )}

            {isGameOver && (
                <div className="text-center mt-6 text-2xl font-bold">
                    {isWin ? (
                        <span className="text-green-600">🎉 You guessed it right!</span>
                    ) : (
                        <span className="text-red-600">❌ Game Over! The word was {target}.</span>
                    )}
                </div>
            )}
        </div>
    );
}
export default Wordle;
