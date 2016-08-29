import React from 'react'
import PlayerList from '../containers/PlayerList'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import CreatePlayer from '../containers/CreatePlayer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <PlayerList />
    <CreatePlayer />
    <br />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
