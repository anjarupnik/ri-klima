import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import SocialMedia from './SocialMedia'
import Facebook from './Facebook'
import Google from './Google'
import YouTube from './YouTube'

chai.use(chaiEnzyme())

describe('SocialMedia', () => {
    const wrapper = shallow(<SocialMedia />)

  it('is wrapped in a div with class name "SocialIcon"', () => {
  expect(wrapper).to.have.tagName('div')
  expect(wrapper).to.have.className('SocialIcon')
  })

  it('contains a SocialMedia', () => {
    expect(wrapper).to.have.descendants(Facebook)
  })

  it('contains a SocialMedia', () => {
    expect(wrapper).to.have.descendants(Google)
  })

  it('contains a SocialMedia', () => {
    expect(wrapper).to.have.descendants(YouTube)
  })

})
