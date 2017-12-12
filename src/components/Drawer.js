import React, { PureComponent } from 'react'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'

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
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false} width={200} openSecondary={true}
          onRequestChange={(open) => this.setState({open})} 
          open={this.state.open} >
        </Drawer>
      </div>

    )
  }
}

export default MailDrawer
