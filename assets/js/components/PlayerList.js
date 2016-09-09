import React, { PropTypes } from 'react'
import Player from './Player'

const PlayerList = ({ players }) => (
  <ul>
    {players.map(player =>
      <Player
        key={player.id}
        {...player}
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
