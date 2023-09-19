import React from "react";

import { checkGuess } from "../../game-helpers";

function GuessItem({ guess, answer }) {
  const truth = checkGuess(guess, answer);

  return (
    <p className="guess">
      {(guess ? guess.split("") : Array(5).fill(null)).map((item, index) => {
        return (
          <span
            className={truth ? `cell ${truth[index].status}` : "cell"}
            key={index}
          >
            {item}
          </span>
        );
      })}
    </p>
  );
}

export default GuessItem;
