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

const todos = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PLAYERS':
      return state.players.map(p =>
        player(p, action)
      )
    case 'SET_CURRENT_PLAYER':
      return state //TODO
    default:
      return state
  }
}

export default todos
