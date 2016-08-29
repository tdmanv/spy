import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
var App = require('./app')

render(<App/>, document.getElementById('react-app'))
