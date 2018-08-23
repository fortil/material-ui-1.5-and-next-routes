/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/about.js'

describe('With Enzyme', () => {
  it('App shows "William Penagos"', () => {
    const app = shallow(<App />)
    expect(app.find('h1').text()).toEqual('William Penagos')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "William Penagos"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
