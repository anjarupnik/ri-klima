import React, { PureComponent } from 'react'
import './Servisi.css'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class Servisi extends PureComponent {

  goContact = () => { this.props.push('/kontakt')}

  render() {
    return (
      <div className="servisiContainer">
        <div className="titleBox">
        </div>
        <h1 className="servisiTitle">Redoviti servisi klima uređaja</h1>
        <h5 className="questions">Zašto plaćati više? Zašto čekati da dođe do kvara? </h5>
        <p className="intro">
          Za poslovne klijente, funkcionalna i ispravna oprema može značiti razliku između poslovnog uspjeha ili poslovne propasti. Iz tog razloga naš stručni tim nudi održavanje HVAC sustava kako bi Vaša klimatizacija uvijek bila na željenoj razini. Također, da li ste znali da redovnim održavanjem HVAC sustava možete uštedjeti na mjesečnim računima za struju te na taj način uložiti teško zarađeni novac u vlastitu tvrtku umjesto u tuđu?
          Privatni korisnici su naša posebna briga. Kroz dugi niz godina rada sa HVAC sustavima shvatili smo da mnogi ljudi zanemaruju redovite servise klima uređaja jer jednostavno ne razumiju rizik ukoliko se uređaj ne servisira redovito. Klima uređaj je skup pomičnih dijelova koji moraju funkcionirati bez greške kako ne bi oštetili jedan drugog i u konačnosti Vam pružili ono što očekujete bez izvanrednih troškova. Mnogi proizvođači klima uređaja ne priznaju tvorničku garanciju ukoliko uređaj nije servisiran od stručne strane u godišnjim intervalima. Takodjer, redovnim servisima smanjujete troškove elektricne energije te smanjujete opasnost za Vaše zdravlje kroz zrak koji udišete.<br /><br />
          Ukoliko trebate redovan servis nemojte čekati. Nazovite nas na <a href="tel:385-5127-7009">+385 51 277 099 </a> i dogovorite Vaš servis još danas. Ukoliko želite, možete nas kontaktirati i putem web-a ili maila. <a onClick={this.goContact}>Kliknite ovdje</a>.
        </p>
      </div>
    )
  }
}

export default connect(null, {push})(Servisi)
