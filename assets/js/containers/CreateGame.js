import React from 'react'
import { connect } from 'react-redux'
import { createGame } from '../actions'

let CreateGame = ({ dispatch }) => {
  return (
    <div>
      <button 
        onClick={e => {
          e.preventDefault()
          dispatch(createGame())
        }}>
        New Game
      </button>
    </div>
  )
}
CreateGame = connect()(CreateGame)

export default CreateGame
