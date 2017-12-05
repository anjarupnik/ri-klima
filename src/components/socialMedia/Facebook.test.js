import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Facebook from './Facebook'

chai.use(chaiEnzyme())

describe('Facebook', () => {
    const wrapper = shallow(<Facebook />)

  it('is wrapped in a div with class name "facebook"', () => {
  expect(wrapper).to.have.tagName('div')
  expect(wrapper).to.have.className('facebook')
  })

})
