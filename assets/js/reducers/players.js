const player = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_PLAYERS':
      return {
        name: action.name,
      }
    default:
      return state
  }
}

const players = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PLAYERS':
      return action.players
      /*return state.map(p =>
        player(p, action)
      )*/
    case 'SET_CURRENT_PLAYER':
      return state //TODO
    default:
      return state
  }
}

export default players
