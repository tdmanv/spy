import React, { PropTypes } from 'react'

const Player = ({ text }) => (
  <li> 
  {text}
  </li>
)

Player.propTypes = {
  name: PropTypes.string.isRequired
}

export default Player
