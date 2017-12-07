import React, { Component } from 'react';
import Carousel from 'nuka-carousel'
import './Carousel.css'
import { Decorators } from './Decorators'
import Paper from './Paper'

class Caro extends Component {
  render() {
    return (
      <div className="caro">
        <Carousel
          cellAlign='left'
          decorators={Decorators}
          autoplay={true}
          >
          <Paper />
          <Paper />
          <Paper />
          <Paper />
          <Paper />
          <Paper />
          <Paper />
        </Carousel>
      </div>
    )
  }
}

export default Caro
