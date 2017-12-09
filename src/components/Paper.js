import React, { PureComponent } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Ac from 'material-ui/svg-icons/places/ac-unit';
import Paper from 'material-ui/Paper'
import './Carousel.css'

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

class ACPaper extends PureComponent {
  render() {
    return (
      <div className="slide">
        <Paper style={style} zDepth={4} rounded={false}>
          <img className="img" src={this.props.image} alt="klima"/>
          <div className="info">
            <h3 className="model">{this.props.model}</h3>
            <h4 className="price">{this.props.price}</h4>
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
    )
  }
}

export default ACPaper
