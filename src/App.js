import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import Routes from './routes'

class App extends Component {
  static childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
}

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navigation />
          <Routes />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
