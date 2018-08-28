/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Go to the about page"', () => {
    const app = shallow(<App />).dive()
    expect(app.find('a').text()).toEqual('Go to the about page')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Go to the about page"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
