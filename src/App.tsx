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

  console.log(wordToGuess)
  return (
    <div className="App">
      <div className='win-lose-section'> Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App
