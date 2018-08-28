/* eslint-env jest */
/* 
  @By William Penagos billalpeza@gmail.com
*/
import { shallow, mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../login'
const Login = App()

describe('Functions login testing', () => {
  describe('With params', () => {
    const onChange = jest.fn()
    const login = jest.fn()
    const app = mount(<Login change={onChange} login={login} />)
    const email = 'william.penagos@sourcemeridian.com'
    const pwd = '123sourcemeridian.com'

    it('email', () => {
      app.find('TextField').find('input').at(0).props().onChange({ target: { value: email } })
      expect(onChange).toBeCalledWith({ prop: 'user', value: email })
    })
    it('password', () => {
      app.find('Input#password').find('input').props().onChange({ target: { value: pwd } })
      expect(onChange).toBeCalledWith({ prop: 'password', value: pwd })
    })
    it('submit', () => {
      app.find('TextField').find('input').at(0).props().onChange({ target: { value: email } })
      app.find('Input#password').find('input').at(0).props().onChange({ target: { value: pwd } })
      app.find('Button').find('button').at(0).simulate('click')
      expect(login).toBeCalledWith({ user: email, password: pwd })
    })
  })
  describe('Without params', () => {
    const app = shallow(<Login />).dive()
    const email = 'william.penagos@sourcemeridian.com'
    const pwd = '123sourcemeridian.com'

    it('email', () => {
      app.find('TextField').simulate('change', { target: { value: email } })
      expect(app.state('user')).toEqual(email)
    })
    it('password', () => {
      app.find('#password').simulate('change', { target: { value: pwd } })
      expect(app.state('password')).toEqual(pwd)
    })
  })
})

describe('With Snapshot Testing', () => {
  it('Snapshot of login', () => {
    const component = renderer.create(<Login />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
