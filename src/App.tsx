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

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return
      setGuessedLetters(curreentLetters => [...curreentLetters, letter])
    },
    [guessedLetters]
  )
  return (
    <div className="App">
      <div className='win-lose-section'> Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}  />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <Keyboard 
        activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  )
}

export default App
