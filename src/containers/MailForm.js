import React, {PureComponent} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Send from 'material-ui/svg-icons/content/send'

class MailForm extends PureComponent {

  state = {}

  submitForm(event) {
    event.preventDefault()
}

  validateAll() {
    return this.validateName() &&
      this.validateEmail() &&
      this.validateSubject() &&
      this.validateMessage()
  }

  validateName() {
    const { name } = this.refs

    if (name.getValue().length > 1) {
      this.setState({
        nameError: null
      })
      return true
    }

    this.setState({
      nameError: 'Please provide your name'
    })
    return false
}

  validateSubject() {
    const { subject } = this.refs

    if (subject.getValue().length > 1) {
      this.setState({
        subjectError: null
      })
      return true
    }

    this.setState({
      subjectError: 'Please provide a subject'
    })
    return false
  }

  validateMessage() {
    const { message } = this.refs

    if (message.getValue().length > 1) {
      this.setState({
        messageError: null
      })
      return true
    }

    this.setState({
      messageError: 'Please provide a message'
    })
    return false
  }

  validateEmail() {
    const { email } = this.refs

    if (email.getValue().match(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email.value === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  render() {
    return (
      <Paper>
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="name" type="text" hintText="Ime"
              onChange={this.validateName.bind(this)}
              errorText={ this.state.nameError} />
          </div>
          <div className="input">
            <TextField ref="email" type="email" hintText="Email adresa"
              onChange={this.validateEmail.bind(this)}
              errorText={ this.state.emailError} />
          </div>
          <div className="input">
            <TextField ref="subject" type="subject" hintText="Predmet"
              onChange={this.validateSubject.bind(this)}
              errorText={ this.state.subjectError} />
          </div>
          <div className="input">
            <TextField ref="message" type="message" hintText="Poruka"
              onChange={this.validateMessage.bind(this)}
              errorText={ this.state.messageError}
              multiLine={true}
              rows={8}
             />
          </div>
        </form>
        <RaisedButton
          primary={true}
          onClick={ this.submitForm.bind(this) }
          label="Pošalji"
          icon={<Send />}
          style={{marginTop: '10%',}}
        />
      </Paper>
    )
  }
}

export default MailForm
