import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import Logo from '../images/LOGO.png'
import Icon from 'material-ui/svg-icons/action/view-headline'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import './Navigation.css'

class Navigation extends PureComponent {

  render () {
    return (
      <AppBar
        style={{
          height: '20%',
          top: '0',
          bottom: '0',
          paddingBottom: '0',
          paddingTop: '0'
        }}
        iconStyleRight={{
          marginTop: '2%'
        }}
        iconElementLeft={<img className="logo" src={Logo} alt="logo" />}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><Icon style={{height: '220px'}}/></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >

            <MenuItem primaryText="Klimatizacija" />
            <MenuItem primaryText="Ventilacija" />
            <MenuItem primaryText="Grijanje" />

          </IconMenu>
        }
      />
    )
  }
}

export default Navigation
