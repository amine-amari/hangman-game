import './HangmanDrawing.css'

const HEAD = (
    <div className='hangman-head'/>
)

const BODY = (
    <div className='hangman-body'/>
)

const RIGHT_ARM = (
    <div className='right-arm'/>
)

const LEFT_ARM = (
    <div className='left-arm'/>
)


const RIGHT_LEG = (
    <div className='right-leg'/>
)

const LEFT_LEG = (
    <div className='left-leg'/>
)


function HangmanDrawing() {
  return (
    <div className=".hangman-drawing-container">
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div className='drop-bar'/>
        <div className='top-bar'/>
        <div className='upright-bar'/>
        <div className='bottom-bar'/>
    </div>
  )
}

export default HangmanDrawing