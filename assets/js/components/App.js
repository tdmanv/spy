import React from 'react'
import FetchedPlayerList from '../containers/FetchedPlayerList'
import FetchPlayers from '../containers/FetchPlayers'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import CreatePlayer from '../containers/CreatePlayer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <FetchPlayers />
    <FetchedPlayerList />
    <CreatePlayer />
    <br />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
