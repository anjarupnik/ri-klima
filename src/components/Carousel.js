import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Carousel.css'

class Caro extends Component {
  render() {
    return (
        <div className="caro">
          <Carousel
            showThumbs={false}
            showStatus={false}
            centerMode>
            <div>
              <img width='10px' className="img" src="http://res.cloudinary.com/mdfchucknorris/image/upload/v1512581036/avant_yrxnvs.png" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="assets/2.jpeg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="assets/3.jpeg" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
    )
  }
}

export default Caro
