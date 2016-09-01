import React from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { fetchPlayers } from '../actions'

let _handleClick = () => {
	fetch('/api/v1/player/')
		.then(function(response) {
			response.json().then(function(json) {
        console.log(json)
      })
		})
}

let FetchPlayer = ({ dispatch }) => {
		return (<div onClick={_handleClick}>Fetch</div>)
}

FetchPlayer = connect()(FetchPlayer)

export default PlayerList