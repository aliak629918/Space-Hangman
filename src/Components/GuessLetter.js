import { useState } from "react";

function GuessLetter({ addLetterGuess }) {
  const [letterGuessInput, setLetterGuessInput] = useState("");
  function handleChange(event) {
    setLetterGuessInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!/[A-Za-z]/.test(letterGuessInput)) {
      setLetterGuessInput("");
      return;
    }
    addLetterGuess(letterGuessInput);
    setLetterGuessInput((currInput) => {
      return "";
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Guess a Letter
        <input
          maxLength={1}
          value={letterGuessInput}
          onChange={(event) => {
            handleChange(event);
          }}
          type="text"
        ></input>
      </label>
      <button>Check</button>
    </form>
  );
}

export default GuessLetter;
