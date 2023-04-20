import { useState } from 'react'
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
  
  console.log(wordToGuess)
  return (
    <div className="App">
      <div className='win-lose-section'> Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}  />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App
