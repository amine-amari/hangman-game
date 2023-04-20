import './HangmanWord.css'

function HangmanWord() {

  const word = "test"
  const guessedLetters = ["t", "e", "g"]

  return (
    <div className="hangman-word-container">
      {word.split("").map((letter, index) => (
        <span className='letter-container' key={index}>
          <span className={`${guessedLetters.includes(letter) ? "letter-visible" : "letter-hidden"}`}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord