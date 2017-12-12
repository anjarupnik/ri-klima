import React, { PureComponent } from 'react'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import Title from './Title'
import Send from 'material-ui/svg-icons/content/send'
import MailForm from '../containers/MailForm'

const style = {
  marginTop: '25%',
  float: 'left',
  marginLeft: '5%',
}

class MailDrawer extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div>
        <RaisedButton
          label="Pošalji email"
          onClick={this.handleToggle}
          icon={<Send />}
        />
        <Drawer
          docked={false} width={400} openSecondary={true}
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open} >
          <Title content="Pošalji email"/>
          <MailForm />
          <RaisedButton
            style={ style }
            label="Nazad"
            onClick={this.handleClose}
          />
        </Drawer>
      </div>

    )
  }
}

export default MailDrawer
