import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Home, Kontakt, Servisi } from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/"  component={Home} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/servisi" component={Servisi} />
      </div>
    )
  }
}
