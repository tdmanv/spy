import React from 'react'
import { connect } from 'react-redux'
import { createPlayer } from '../actions'

let CreatePlayer = ({ dispatch }) => {
  let input
  let game_id

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(createPlayer(input.value, +game_id.value))
        input.value = ''
        game_id.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <input ref={node => {
          game_id = node
        }} />
        <button type="submit">
          Join Game
        </button>
      </form>
    </div>
  )
}
CreatePlayer = connect()(CreatePlayer)

export default CreatePlayer
