import React, { PureComponent } from 'react'
import Logo from '../images/LOGO.png'
import './Navigation.css'

class Navigation extends PureComponent {

  render () {
    return (
      <div className="navbar-fixed">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo"><img className="logo" src={Logo} alt="logo" /></a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">O nama</a></li>
              <li><a href="badges.html">Usluge</a></li>
              <li><a href="collapsible.html">Kontakt</a></li>
            </ul>
          </div>
          <div className="nav-content">
            <ul id="nav-mobile" className="tabs tabs-transparent hide-on-med-and-down">
              <li className="tab"><a className="klima" href="#test1">Klimatizacija</a></li>
              <li className="tab"><a className="klima" href="#test2">Ventilacija</a></li>
              <li className="tab"><a href="#test3" className="klima">Grijanje</a></li>
              <li className="tab"><a href="#test4" className="klima">Vodoinstalacija</a></li>
              <li className="tab"><a href="#test5" className="klima">Zaposlenje</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navigation
