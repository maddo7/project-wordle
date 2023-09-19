import React from "react";

function GuessInput({ addGuess, won }) {
  const [input, setInput] = React.useState("");

  function submit(event) {
    event.preventDefault();
    console.log(input);
    addGuess(input);
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        disabled={won !== undefined}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => {
          const nextValue = event.target.value.toUpperCase();
          if (nextValue.length > 5) {
            return;
          }
          setInput(nextValue);
        }}
      />
    </form>
  );
}

export default GuessInput;
