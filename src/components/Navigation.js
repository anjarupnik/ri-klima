import React, { PureComponent } from 'react'
import Logo from '../images/LOGO.png'
import './Navigation.css'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class Navigation extends PureComponent {

  goHome = () => {
    this.props.push('/')
  }

  goKontakt = () => {
    this.props.push('/kontakt')
  }

  render () {
    return (
      <div className="navbar-fixed">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a className="brand-logo" onClick={this.goHome}><img className="logo" src={Logo} alt="logo" /></a>
            <a data-activates="mobile-demo" className="button-collapse">
              <IconMenu
                className="hamburger"
                iconButtonElement={
                  <IconButton><i className="material-icons">menu</i></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="Klimatizacija" />
                <MenuItem primaryText="Ventilacija" />
                <MenuItem primaryText="Grijanje" />
                <MenuItem primaryText="Vodoinstalacija" />
                <MenuItem primaryText="Zaposlenje" />
                <MenuItem primaryText="Usluge" />
                <MenuItem primaryText="O nama" />
                <MenuItem primaryText="Kontakt" onClick={this.goKontakt}/>
              </IconMenu>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">O nama</a></li>
              <li><a href="badges.html">Usluge</a></li>
              <li><a onClick={this.goKontakt}>Kontakt</a></li>
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

export default connect(null, { push })(Navigation)
