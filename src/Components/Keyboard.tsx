import './Keyboard.css'

const KEYS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]

type KeyboardProps = {
        activeLetters: string[]
        inactiveLetters: string[]
        addGuessedLetter: (letter: string) => void
}

function Keyboard({activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) {
  return (
    <div className="keyboard-container">
      {KEYS.map( key => {
        const isActive = activeLetters.includes(key)
        const isInActive = inactiveLetters.includes(key)
        return (
          <button 
            onClick={() => addGuessedLetter(key)} 
            className={`letter-btn ${isActive ? "letter-btn-active" : ""} ${isInActive ? "letter-btn-inactive" : ""}`}
            disabled={isActive || isInActive}
            key={key}>
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard