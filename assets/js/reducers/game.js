const initialState = {  
  game: {},
  isFetching: false
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_GAMES':
      return { ...state, isFetching: true }
    case 'RECEIVE_GAMES':
      return { game: action.game, isFetching: false }
    case 'SET_CURRENT_GAME':
      return {...state, game: action.game }
    default:
      return state
  }
}

export default game
