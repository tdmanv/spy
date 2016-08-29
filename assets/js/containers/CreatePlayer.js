import React from 'react'
import { connect } from 'react-redux'
import { createPlayer } from '../actions'

let CreatePlayer = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(createPlayer(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
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
