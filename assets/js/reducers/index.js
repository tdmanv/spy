import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import players from './players'
import game from './game'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  players,
  game
})

export default todoApp
