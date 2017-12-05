import React, { PureComponent } from 'react'
import Facebook from './Facebook'
import YouTube from './YouTube'
import Google from './Google'
import './SocialMedia.css'

class SocialMedia extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
        <YouTube />
        <Google />
        <Facebook />
      </div>
    )
  }
}

export default SocialMedia
