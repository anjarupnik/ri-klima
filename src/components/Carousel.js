import React, { Component } from 'react';
import Carousel from 'nuka-carousel'
import './Carousel.css'
import { Decorators } from './Decorators'
import Paper from './Paper'
import { connect } from 'react-redux'

class Caro extends Component {
  render() {
    return (
      <div className="caro">
        <Carousel
          cellAlign='left'
          decorators={Decorators}
          autoplay={true}
          dragging={true}
          >
          {this.props.special.map(m =>
          <Paper image={m.image} key={m.price} model={m.model} price={m.price}/>

          )}

        </Carousel>
      </div>
    )
  }
}

const mapStateToProps = ({special}) => ({special})

export default connect(mapStateToProps)(Caro)
