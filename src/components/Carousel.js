import React, { Component } from 'react';
import Carousel from 'nuka-carousel'
import Paper from 'material-ui/Paper'
import './Carousel.css'
import { Decorators } from './Decorators'

const style = {
  height: 400,
  width: '80%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}



class Caro extends Component {
  render() {
    return (
      <div className="caro">
        <Carousel
          autoplay={true}
          cellAlign='left'
          decorators={Decorators}
          >
          <div className="slide">
            <Paper style={style} zDepth={4} rounded={false}>
            <img className="img" src="http://res.cloudinary.com/mdfchucknorris/image/upload/v1512581036/avant_yrxnvs.png" alt="klima"/>
            </Paper>
          </div>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
      </div>
    )
  }
}

export default Caro
