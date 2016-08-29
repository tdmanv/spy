import React from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

let _handleClick = () => {
	fetch('/api/v1/player/')
		.then(function(response) {
			response.json().then(function(json) {
        console.log(json)
      })
		})
}

let PlayerList = ({ dispatch }) => {
		return (<div onClick={_handleClick}>Fetch</div>)
}

//AddTodo = connect()(AddTodo)

export default PlayerList
