import './HangmanWord.css'

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

function HangmanWord({guessedLetters, wordToGuess, reveal=false}: HangmanWordProps) {

  return (
    <div className="hangman-word-container">
      {wordToGuess.split("").map((letter, index) => (
        <span className='letter-container' key={index}>
          <span className={`${guessedLetters.includes(letter) || reveal ? "letter-visible" : "letter-hidden"}`}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord