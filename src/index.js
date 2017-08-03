import {Component} from 'preact'
import Router from 'preact-router'

import Home from './routes/home'

export default class App extends Component {
  render () {
    return <div id="app">
      App Content
      <Router>
        <Home path='/' />
      </Router>
    </div>
  }
}
