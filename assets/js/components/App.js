import React from 'react'
import FetchedPlayerList from '../containers/FetchedPlayerList'
import FetchPlayers from '../containers/FetchPlayers'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import CreatePlayer from '../containers/CreatePlayer'
import CreateGame from '../containers/CreateGame'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <h2>Game</h2>
    <hr />
    <CreateGame />
    <hr />
    <h2>Debug</h2>
    <hr />
    <FetchPlayers />
    <br />
    <br />
    <FetchedPlayerList />
    <CreatePlayer />
    <br />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
