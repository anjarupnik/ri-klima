import React, { PureComponent } from 'react'
import './Footer.css'
import SocialMedia from './socialMedia/SocialMedia'

class Footer extends PureComponent {

  render() {
    return (
        <footer className="page-footer">
             <div className="empty">
             </div>
                <div className="col l12 s12">
                  <h5 className="white-text">Radno vrijeme: 08:00 - 18:00
                    <br/> Subotom: 08:00 - 13:00
                    <br/> Nedjeljom: zatvoreno</h5>
                  <p className="grey-text text-lighten-4">
                    Ri Klima Opatija d.o.o. |
                    <a href="https://www.google.hr/maps/place/Ri+Klima+Opatija+d.o.o./@45.355832,14.335646,15z/data=!4m5!3m4!1s0x0:0xbba2293ea06f697e!8m2!3d45.3556557!4d14.3359121"
                      target="_blank">
                    Pavlovac 7/a </a> |
                    <a href="tel:385-5127-7009"> Tel: +385 51 277 099 </a>
                    Fax: +385 51 277 527 |
                    <a href="mailto:ri-klima@ri.t-com.hr">E-mail: ri-klima@ri.t-com.hr</a></p>
                </div>
                <div className="SoMedia">
                  <SocialMedia />
                </div>
          </footer>
    )
  }
}

export default Footer
