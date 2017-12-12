import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Home, Kontakt } from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/"  component={Home} />
        <Route path="/kontakt" component={Kontakt} />
      </div>
    )
  }
}
