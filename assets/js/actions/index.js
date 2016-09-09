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
function receivePlayers(players) {
  return {
    type: RECEIVE_PLAYERS,
    players: players
  }
}

export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER'
function setCurrentPlayer(json) {
  return {
    type: SET_CURRENT_PLAYER,
    player: json.data
  }
}

export const createPlayer = (name, game_id) => {
  return (dispatch) => {
    return fetch('/api/v1/players/', {
      method: 'post',  
      headers: {  
      	"Content-type": "application/json; charset=UTF-8"  
      },  
			body: JSON.stringify({
				name: name,
				game_id: game_id
			})
    })
    .then(response => response.json())
    .then(json => dispatch(setCurrentPlayer(json)))
  }
}

export const createGame = () => {
  return (dispatch) => {
    return fetch('/api/v1/games/', {
      method: 'post',  
      headers: {  
      	"Content-type": "application/json; charset=UTF-8"  
      },  
    })
    .then(response => response.json())
    .then(json => dispatch(setCurrentGame(json)))
  }
}

export const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
function setCurrentGame(json) {
  return {
    type: SET_CURRENT_GAME,
    game: json
  }
}

export const startGame = (game_id) => {
  return (dispatch) => {
    return fetch(`/api/v1/games/${game_id}`, {
      method: 'put',  
      headers: {  
      	"Content-type": "application/json; charset=UTF-8"  
      },  
			body: JSON.stringify({
        state: 'CHOOSE_PARTICIPANTS'
			})
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }
}

export const fetchPlayers = () => {
  return (dispatch, getState) => {
    dispatch(requestPlayers())
    return fetch('/api/v1/players/')
      .then(response => response.json())
      .then(json => dispatch(receivePlayers(json)))
      .then(console.log(getState()))
      /*
      .then(
        setTimeout(() => {
          dispatch(fetchPlayers())
        }, 2000)
      )
      */

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}


