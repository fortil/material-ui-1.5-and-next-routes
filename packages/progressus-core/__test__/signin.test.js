/* eslint-env jest */
/* 
  @By William Penagos billalpeza@gmail.com
*/
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../signin'
const Sing = App()

describe('Functions SIGN testing', () => {
  const sing = jest.fn()
  const app = shallow(<Sing register={sing} />).dive()
  const state = app.state()
  const keys = Object.keys(state)
  const email = 'william.penagos@sourcemeridian.com'
  const emailWrong = 'william.penagos'
  const pwd = '123sourcemeridian.com'
  const pwdWrong = '123'

  const fields = [
    { name: 'William' },
    { lastname: 'Penagos' },
    { password: '123sourcemeridian.com' },
    { passwordconfirmed: '123sourcemeridian.com' },
    { type: 'user' },
    { email: 'william.penagos@sourcemeridian.com' }
  ]

  it('Register a user correctly', () => {
    keys.forEach(key => {
      const obj = state[key]
      let value
      if (obj.type === 'email') {
        value = email
      } else if (obj.type === 'password') {
        value = pwd
      } else if (obj.type === 'radio') {
        value = 'user'
      } else {
        if (obj.name === 'name') {
          value = 'William'
        } else {
          value = 'Penagos'
        }
      }
      app.find(`#${key}`).simulate('change', { target: { value } })
      expect(app.state(key)).toEqual(expect.objectContaining({ value }))
    })
    app.find('#register').simulate('click')
    expect(sing).toBeCalledWith(fields)
  })
  it('Put bad password', () => {
    app.find(`#password`).simulate('change', { target: { value: pwd } })
    app.find(`#passwordconfirmed`).simulate('change', { target: { value: pwdWrong } })
    expect(app.state(`passwordconfirmed`)).toEqual(expect.objectContaining({
      error: true,
      errorText: 'El valor no es igual',
    }))
  })
  it('Put bad email', () => {
    app.find(`#email`).simulate('change', { target: { value: emailWrong } })
    expect(app.state(`email`)).toEqual(expect.objectContaining({
      error: true,
      errorText: 'Ingrese un email válido',
    }))
  })
})

describe('With Snapshot Testing', () => {
  it('Snapshot of Registry', () => {
    const component = renderer.create(<Sing />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
