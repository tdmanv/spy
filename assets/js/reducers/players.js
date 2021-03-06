import { fetchPlayers } from '../actions'

const initialState = {  
  players: [],
  isFetching: false
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PLAYERS':
      return { ...state, isFetching: true }
    case 'RECEIVE_PLAYERS':
      return { players: action.players, isFetching: false }
    case 'SET_CURRENT_PLAYER':
      return state //TODO
    default:
      return state
  }
}

export default players
