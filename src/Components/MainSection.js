import { useState } from "react";
import HiddenWord from "./HiddenWord";
import GuessLetter from "./GuessLetter";
import GameNotification from "./GameNotification";

function MainSection() {
  const [hiddenWord, setHiddenWord] = useState("Four");
  const [letterGuesses, setletterGuesses] = useState([]);
  const [wordGuesses, setWordGuesses] = useState([]);
  const [lives, setLives] = useState(5);
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});
  console.log(letterGuesses);
  function addLetterGuess(letter) {
    if (letterGuesses.includes(letter.toUpperCase())) {
      setMessage("Letter already guessed!");
      setMessageStyle({ color: "red" });
      return;
    }
    setletterGuesses((currentLetterGuesses) => {
      return [...currentLetterGuesses, letter.toUpperCase()];
    });
  }
  return (
    <section>
      <HiddenWord letterGuesses={letterGuesses} hiddenWord={hiddenWord} />
      <GuessLetter addLetterGuess={addLetterGuess} />
      <GameNotification message={message} messageStyle={messageStyle} />
    </section>
  );
}

export default MainSection;
