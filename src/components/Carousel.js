import React, { Component } from 'react';
import Carousel from 'nuka-carousel'
import Paper from 'material-ui/Paper'
import './Carousel.css'
import { Decorators } from './Decorators'
import RaisedButton from 'material-ui/RaisedButton';
import Ac from 'material-ui/svg-icons/places/ac-unit';

const style = {
  button: {
   margin: 12,
 },
 exampleImageInput: {
   cursor: 'pointer',
   position: 'absolute',
   top: 0,
   bottom: 0,
   right: 0,
   left: 0,
   width: '100%',
   opacity: 0,
 },
  height: '120%',
  width: '80%',
  margin: 20,
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  flexWrap: 'wrap',
}



class Caro extends Component {
  render() {
    return (
      <div className="caro">
        <Carousel
          cellAlign='left'
          decorators={Decorators}
          >
          <div className="slide">
            <Paper style={style} zDepth={4} rounded={false}>
              <img className="img" src="http://res.cloudinary.com/mdfchucknorris/image/upload/v1512651883/ke-tke_enqaew.png" alt="klima"/>
              <div className="info">
                <h3 className="model">3,5 kW: GWH12RA</h3>
                <h4 className="price">Cijena: 3.750,00 kn</h4>
                <RaisedButton
                   label="Opširnije"
                   labelPosition="before"
                   primary={true}
                   icon={<Ac />}
                   style={style.button}
                 />
              </div>
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
