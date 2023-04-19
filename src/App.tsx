import { useState } from 'react'
import words from './WordList.json'
import './App.css'

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  return (
    <div className="App">
      Hello
    </div>
  )
}

export default App
