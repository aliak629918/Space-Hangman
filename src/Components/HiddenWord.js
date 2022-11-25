function HiddenWord({ hiddenWord, letterGuesses, isGameFinished }) {
  const hiddenWordArray = hiddenWord.toUpperCase().split("");
  const displayArray = [];

  hiddenWordArray.forEach((letter) => {
    if (letterGuesses.includes(letter) || isGameFinished === true) {
      displayArray.push(letter);
    } else {
      displayArray.push("_");
    }
  });

  return (
    <div className="hidden-word">
      {displayArray.map((letter, index) => {
        return (
          <span
            key={index}
            style={{
              textDecoration: "underline",
              marginRight: "0.5rem",
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}

export default HiddenWord;
