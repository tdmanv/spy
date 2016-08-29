import React, { PropTypes } from 'react'
import Player from './Player'

const PlayerList = ({ players, onTodoClick }) => (
  <ul>
    {players.map(player =>
      <Player
        key={player.id}
        {...player}
        onClick={() => onTodoClick(player.id)}
      />
    )}
  </ul>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default PlayerList
