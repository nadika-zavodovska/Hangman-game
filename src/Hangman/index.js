// Importing necessary components
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Buttons from "../Components/Buttons";
import Images from "../Components/Images";
import Result from "../Components/Result";
import Rules from "../Components/Rules";

// List of possible words to be guessed
const words = [
  "A",
  "AA",
  "Aachen",
  "Aalborg",
  "Aalost",
  "Aar",
  "aardvark",
  "aardvark",
  "aardwolf",
  "Aare",
  "Aarhus",
  "Aaron",
  "AARP",
  "AAS",
  "AB",
  "aba",
  "abaca",
  "aback",
  "abactinal",
  "abacus",
  "Abadan",
  "abaft",
  "abalone",
  "abamp",
  "abampere",
];

// Maximum number of wrong guesses allowed
const maxWrong = 11;

// Main Hangman component
const Hangman = () => {
  // Setting up state hooks
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [answer, setAnswer] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [wrongGuesses, setWrongGuesses] = useState(0);

  // Setting up an effect hook to handle key press events
  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key, keyCode } = event;
      if (keyCode >= 65 && keyCode <= 90 && !guessedLetters.has(key)) {
        setGuessedLetters(new Set([...guessedLetters, key]));
        if (!answer.includes(key)) {
          setWrongGuesses(wrongGuesses + 1);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [answer, guessedLetters, wrongGuesses]);

  // Function to handle a letter guess
  const handleGuess = (letter) => {
    setGuessedLetters(new Set([...guessedLetters, letter]));

    if (!answer.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  // Determining game over and winner statuses
  const gameOver = wrongGuesses >= maxWrong;
  const isWinner = answer
    .split("")
    .every((letter) => guessedLetters.has(letter.toLowerCase()));

  // Determining game status to display
  const gameStatus = isWinner
    ? "You Won!"
    : gameOver
    ? "You Lost!"
    : "Playing...";

  // Render the Hangman component
  return (
    <>
      <h1>Hangman</h1>
      <Rules />
      <Images index={wrongGuesses} gameOver={gameOver} alt="Hangman" />
      <p>Guess the word:</p>
      <Result answer={answer} guessedLetters={guessedLetters} />
      <p>{gameStatus}</p>
      <div className={`${styles.buttons}`}>
        <Buttons onPress={handleGuess} guessedLetters={guessedLetters} />
      </div>
      <button
        onClick={() => window.location.reload()}
        className={`${styles.buttonRestart}`}
      >
        Restart
      </button>
    </>
  );
};

// Exporting the Hangman component
export default Hangman;
