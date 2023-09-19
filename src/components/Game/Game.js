import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState();
  console.log(guesses);

  function addGuess(guess) {
    const nextGuess = { guess, id: Math.random() };
    const nextGuesses = [...guesses, nextGuess];

    setGuesses(nextGuesses);
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setWon(false);
    }
    if (guess === answer) {
      setWon(true);
    }
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} won={won} />
      {won || guesses.length >= NUM_OF_GUESSES_ALLOWED ? (
        <Banner won={won} answer={answer} guesses={guesses.length} />
      ) : null}
    </>
  );
}

export default Game;
