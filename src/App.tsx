import { useCallback, useState } from 'react'
import words from './WordList.json'
import './App.css'
import HangmanDrawing from './Components/HangmanDrawing'
import HangmanWord from './Components/HangmanWord'
import Keyboard from './Components/Keyboard'

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6

  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return
      setGuessedLetters(curreentLetters => [...curreentLetters, letter])
    },
    [guessedLetters]
  )
  return (
    <div className="App">
      <div className='win-lose-section'>
        {isWinner && "Winner! - Refresh to play again"}
        {isLoser && "Nice Try - Refresh to play again" }
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}  />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <Keyboard 
        activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        disabled= {isWinner || isLoser}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  )
}

export default App
