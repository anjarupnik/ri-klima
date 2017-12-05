import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Footer from './Footer'
import SocialMedia from './socialMedia/SocialMedia'

chai.use(chaiEnzyme())

describe('Footer', () => {
    const wrapper = shallow(<Footer />)

  it('is wrapped in a footer with class name "page-footer"', () => {
  expect(wrapper).to.have.tagName('footer')
  expect(wrapper).to.have.className('page-footer')
  })

  it('renders the content', () => {
    expect(wrapper).to.have.text('Radno vrijeme: 08:00 - 18:00 Subotom: 08:00 - 13:00 Nedjeljom: zatvorenoRi Klima Opatija d.o.o. |Pavlovac 7/a  | Tel: +385 51 277 099 Fax: +385 51 277 527 |E-mail: ri-klima@ri.t-com.hr<SocialMedia />')
  })

  it('contains a SocialMedia', () => {
    expect(wrapper).to.have.descendants(SocialMedia)
  })

})
