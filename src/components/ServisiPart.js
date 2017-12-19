import React, { PureComponent } from 'react'
import './ServisiPart.css'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import More from 'material-ui/svg-icons/navigation/more-horiz';

const style = {
  position: 'relative',
  float: 'right',
  marginTop: '40px',
}
class ServisiPart extends PureComponent {

  goServisi = () => { this.props.push('/servisi')}

  render() {
    return (
      <div className="shortContainer">
        <div className="shortImage">
          <img className="servisiImg" src='http://res.cloudinary.com/mdfchucknorris/image/upload/v1513591306/servis_klima_uredaja_wki399.jpg' alt="servisi" />
        </div>
        <div className="shortText">
          <h1 className="servisiTitle">Redoviti servisi klima uređaja</h1>
          <br />
          <h5 className="questions">Zašto plaćati više? Zašto čekati da dođe do kvara? </h5>
          <p className="intro">
            Svaki klima uređaj neophodno je redovno čistiti prvenstveno iz zdravstvenih, a zatim iz tehničkih razloga jer redovitim servisom produžujete jamstvo na uređaj za godinu dana. O opasnostima koje krije neodgovorno (ne)održavanje više pročitajte ovdje. Za rezervaciju termina redovitog servisa obratite nam se putem maila ili nas nazovite. Cijena redovnog servisa iznosi 250.00 kn + PDV. Za više jedinica odobravamo dodatni popust.
            <br /><br />
          </p>
          <RaisedButton
             label="Više"
             labelPosition="before"
             primary={true}
             style={style}
             onClick={this.goServisi}
           />
        </div>
      </div>
    )
  }
}

export default connect(null, {push})(ServisiPart)
