import React, { PureComponent } from 'react'
import './Title.css'

class Title extends PureComponent {
  render() {
    return (
      <div className="titleContainer">
        <h1 className="title">{this.props.content}</h1>
      </div>
    )
  }
}

export default Title
