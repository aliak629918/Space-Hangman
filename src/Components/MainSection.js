import { useState } from "react";
import HiddenWord from "./HiddenWord";
import GuessLetter from "./GuessLetter";
import GameNotification from "./GameNotification";
import GuessWord from "./GuessWord"

function MainSection() {
  const [isGameFinished, setIsGameFinished] = useState(true);
  const [hiddenWord, setHiddenWord] = useState("");
  const [letterGuesses, setletterGuesses] = useState([]);
  const [wordGuesses, setWordGuesses] = useState([]);
  const [lives, setLives] = useState(5);
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});

  const words = ["throat",
    "interference",
    "stadium",
    "bus",
    "habit",
    "drive",
    "needle",
    "pit",
    "style",
    "Europe",
    "key",
    "agenda",
    "oppose",
    "recording",
    "panic",
    "addicted",
    "admission",
    "ceiling",
    "bin",
    "cheat",
    "exile",
    "publication",
    "forge",
    "custody",
    "northcoders",
    "react",
    "freckle",
    "technology",
    "basin",
    "recommendation",
    "constant",
    "chaos",
    "body",
    "queue",
    "contraction",
    "twin",
    "assault",
    "mild",
    "explicit",
    "enemy",
    "sin",
    "fist",
    "estimate",
    "dentist",
    "enhance",
    "grief",
    "breakdown",
    "suffering",
    "birthday",]

  function resetGame(){
    setIsGameFinished(false);
    setletterGuesses([]);
    setWordGuesses([]);
    setLives(5);
    setMessage('');
    setHiddenWord(words[Math.floor(Math.random() * 50)])
  }

  function addLetterGuess(letter) {
    let isCorrect = false;
    if (letterGuesses.includes(letter.toUpperCase())) {
      setMessage("Letter already guessed!");
      setMessageStyle({ color: "red" });
      return;
    }

    if (hiddenWord.toUpperCase().includes(letter.toUpperCase()) === false)
    {
      setMessage("Letter is wrong!");
      setMessageStyle({ color: "red" });
      setLives((currentLives) => {
        return currentLives -= 1;
      })
    }
    else {
      setMessage("Letter is correct!");
      setMessageStyle({ color: "green" });
      isCorrect = true;
    }

    setletterGuesses((currentLetterGuesses) => {
      return [...currentLetterGuesses, letter.toUpperCase()];
    });
    if(isCorrect) {
      checkWinState([...letterGuesses, letter.toUpperCase()])
    }
    else{
      checkLoseState();
    }
    
  }

  function checkWinState(currentLetterGuesses) {
    let isMatch = true;
    hiddenWord.split('').forEach((letter) => {
      if(currentLetterGuesses.includes(letter.toUpperCase()) !== true)
      {
        isMatch = false;
      }
    })

    if(isMatch === true)
    {
      console.log("IN CHECK WIN STATE")
      setMessage("Correct Word Found! You Win!");
      setMessageStyle({ color: "green" });
      setIsGameFinished(true);
    }
    
  }

  function checkLoseState(){
    if((lives - 1) === 0)
    {
      setMessage("Too many wrong guesses, you lose!");
      setMessageStyle({ color: "red" });
      setIsGameFinished(true);
    }
  }

  function addWordGuess(word){
    let isCorrect = false;
    if (wordGuesses.includes(word.toUpperCase())) {
      setMessage("Word already guessed!");
      setMessageStyle({ color: "red" });
      return;
    }
    setWordGuesses((currentWordGuesses)=> {
      return [...currentWordGuesses, word.toUpperCase()]
    })
    if(word.toUpperCase() !== hiddenWord.toUpperCase()) {
      setMessage("Incorrect word guess!");
      setMessageStyle({ color: "red" });
      setLives((currentLives)=> {
        let newLives = (currentLives - 2)
        if(newLives < 0){
          newLives = 0;
        }
        return newLives;
      })
    }
    else {
      checkWinState(word.toUpperCase().split(''))
      return;
    }

    checkLoseState();
  }


  return (
    <section>
      <button onClick={() => {
        resetGame();
      }}>New Game</button>
      <HiddenWord letterGuesses={letterGuesses} hiddenWord={hiddenWord} isGameFinished={isGameFinished} />
      <GuessLetter addLetterGuess={addLetterGuess} isGameFinished={isGameFinished}/>
      <GuessWord addWordGuess={addWordGuess} isGameFinished={isGameFinished} wordLength={hiddenWord.length}/>
      <GameNotification message={message} messageStyle={messageStyle} />
      <p style={{fontWeight: "bold"}}>Lives: {lives}</p>
      <p style={{fontWeight: "bold"}}>Guessed Letters</p>
      {letterGuesses.map((letter) => {
        return <span key={letter}>{letter}, </span>
      })}
      
    </section>
  );
}

export default MainSection;
