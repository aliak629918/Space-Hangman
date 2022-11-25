function HiddenWord({ hiddenWord, letterGuesses }) {
  const hiddenWordArray = hiddenWord.toUpperCase().split("");
  const displayArray = [];
  hiddenWordArray.forEach((letter) => {
    if (letterGuesses.includes(letter)) {
      displayArray.push(letter);
    } else {
      displayArray.push("_");
    }
  });
  console.log(hiddenWordArray);
  return (
    <div>
      {displayArray.map((letter, index) => {
        return (
          <span
            key={index}
            style={{
              textDecoration: "underline",
              marginRight: "0.5rem",
              fontSize: "2rem",
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
