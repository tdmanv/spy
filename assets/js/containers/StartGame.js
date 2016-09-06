import React from 'react'
import { connect } from 'react-redux'
import { startGame } from '../actions'

let StartGame = ({ dispatch }) => {
  return (
    <div>
      <button 
        onClick={e => {
          e.preventDefault()
          dispatch(startGame())
        }}>
      Start Game
      </button>
    </div>
  )
}
StartGame = connect()(StartGame)

export default StartGame
