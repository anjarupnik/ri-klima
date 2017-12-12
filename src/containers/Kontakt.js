import React, { PureComponent } from 'react'
import './Kontakt.css'
import Mail from 'material-ui/svg-icons/communication/email'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Phone from 'material-ui/svg-icons/communication/phone'
import Fax from 'material-ui/svg-icons/action/print'
import Site from 'material-ui/svg-icons/social/public'
import Divider from 'material-ui/Divider'
import MailDrawer from '../components/Drawer'

class Kontakt extends PureComponent {
  render() {
    return (
      <div className="contactPage">
        <iframe title="Ri-klima" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11214.608925730156!2d14.335646!3d45.355832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbba2293ea06f697e!2sRi+Klima+Opatija+d.o.o.!5e0!3m2!1sen!2snl!4v1513068376791" width="600" height="450" ></iframe>
          <div className="text">
            <List>
              <h5 className="adresa">Pavlovac 7/a, 51410 Opatija, Hrvatska</h5>
            </List>
            <Divider />
            <List>
              <ListItem primaryText={<a href="mailto:ri-klima@ri.t-com.hr">ri-klima@ri.t-com.hr</a>} leftIcon={<Mail />} />
              <ListItem primaryText={<a href="tel:385-5127-7009">+385 51 277 099 </a>} leftIcon={<Phone />} />
              <ListItem primaryText="+385 51 277 527" leftIcon={<Fax />} />
              <ListItem primaryText={<a href="http://www.ri-klima.hr/" target="_blank">http://www.ri-klima.hr/</a>} leftIcon={<Site />} />
           </List>
           <div className="drawerButton">
           <MailDrawer />
           </div>
         </div>
      </div>
    )
  }
}

export default Kontakt
