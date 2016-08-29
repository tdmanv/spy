let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


export const REQUEST_PLAYERS = 'REQUEST_PLAYERS'
function requestPlayers() {
  return {
    type: REQUEST_PLAYERS
  }
}

export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
function receivePlayers(json) {
  return {
    type: RECEIVE_PLAYERS,
    players: json.data.children.map(child => child.data)
  }
}

export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER'
function setCurrentPlayer(json) {
  return {
    type: SET_CURRENT_PLAYER,
    player: json.data
  }
}

export const createPlayer = (name) => {
  return (dispatch) => {
    return fetch('/api/v1/player/', {
      method: 'post',  
      headers: {  
      	"Content-type": "application/json; charset=UTF-8"  
      },  
			body: JSON.stringify({
				name: name
			})
    })
    .then(response => response.json())
    .then(json => dispatch(setCurrentPlayer(json)))
  }
}

export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch(requestPlayers())
    return fetch('/api/v1/player/')
      .then(response => response.json())
      .then(json => dispatch(receivePlayers(json)))

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}






























