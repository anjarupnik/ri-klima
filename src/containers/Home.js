import React, { PureComponent } from 'react'
import Caro from '../components/Carousel'
import ServisiPart from '../components/ServisiPart'

class Home extends PureComponent {

  render() {
    return (
      <div>
        <Caro />
        <ServisiPart />
      </div>
    )
  }
}

export default Home
