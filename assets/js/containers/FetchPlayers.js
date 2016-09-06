import React from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { fetchPlayers } from '../actions'


let FetchPlayer = ({ dispatch }) => {
  let _handleClick = () => {
    dispatch(fetchPlayers())
  }
	return (
    <button onClick={_handleClick}>
      Fetch Players
    </button>
  )
}

FetchPlayer = connect()(FetchPlayer)

export default FetchPlayer 
