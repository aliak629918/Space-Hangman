import { useState } from "react";

function GuessWord({ addWordGuess, isGameFinished, wordLength }) {
  const [wordGuessInput, setWordGuessInput] = useState("");

  function handleChange(event) {
    setWordGuessInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!/[A-Za-z]/g.test(wordGuessInput)) {
        setWordGuessInput("");
      return;
    }
    addWordGuess(wordGuessInput);
    setWordGuessInput((currInput) => {
      return "";
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Guess the word
        <input
          maxLength={wordLength}
          value={wordGuessInput}
          onChange={(event) => {
            handleChange(event);
          }}
          type="text"
         disabled={isGameFinished}></input>
      </label>
      <button>Check</button>
    </form>
  );
}

export default GuessWord;
