import React, {useEffect, useState} from 'react'
import './App.css'
import {gameSubject, initGame, resetGame} from './Game'
import Board from './Board'

function App() {
  const [board, setBoard] = useState([])
  const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()
  //const [turn, setTurn] = useState()

  useEffect(() => {
    initGame()
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board)
      setIsGameOver(game.isGameOver)
      setResult(game.result)
      //setTurn(game.turn)
  })
      return () => subscribe.unsubscribe()
  }, [])

  // container - global container
  return (
  <div className='container'>
        <button onClick={resetGame} className="reset-button">
        <span className='vertical-text'>
          NEW GAME
        </span>
      </button>
    {isGameOver && (
      <h2 className='vertical-text'>
      GAME OVER
      </h2>
    )}
    <div className='board-container'>
      <Board board={board}/>
    </div>
    {result && <p className='vertical-text'>{result}</p>}
  </div>
  )
}
//<Board board={board} turn={turn}
export default App
