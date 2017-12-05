import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect, assert } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Navigation from './Navigation'


chai.use(chaiEnzyme())

describe('Navigation', () => {
  it('should render', () => {
    const wrapper = shallow(<Navigation />)
    assert.ok(wrapper);

  it('is wrapped in a div with class name "navbar-fixed"', () => {
  expect(wrapper).to.have.tagName('div')
  expect(wrapper).to.have.className('navbar-fixed')
  })

  it('renders the content', () => {
    expect(wrapper).to.have.text('Klimatizacija')
  })

 })
})
