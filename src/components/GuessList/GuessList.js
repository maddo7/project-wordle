import React from "react";
//import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessItem from "../GuessItem";

function GuessList({ guesses, answer }) {
  const guessArray = [...guesses];
  if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
    for (var i = 0; i < NUM_OF_GUESSES_ALLOWED - guesses.length; i++) {
      guessArray.push({ guess: null, id: Math.random() });
    }
  }

  console.log(guessArray);

  return (
    <div className="guess-results">
      {guessArray.map(({ id, guess }) => {
        return <GuessItem key={id} answer={answer} guess={guess} />;
      })}
    </div>
  );
}

export default GuessList;
