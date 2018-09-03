import { firestore } from '../lib/firebase'
import { setUser } from '../redux/actions'
import db from '../lib/db'
import { dateUtc } from '../utils'

export const dataUser = [
  'address',
  'lastSession',
  'name',
  'birthDate',
  'emailVerified',
  'cellphoneEmergency',
  'comments',
  'createdAt',
  'educationLevel',
  'email',
  'eps',
  'gender',
  'heLivesWith',
  'idNumber',
  'idType',
  'type',
  'uid',
  'photoURL',
  'complete',
  'lastName'
]

export function userSanitize(user) {
  return Object.assign(
    {}, 
    ...dataUser.filter(key => user.hasOwnProperty(key)).map(data => ({ [data]: user[data] }))
  )
}

export function registerUserApi(usr) {
  return dispatch => {
    const user = userSanitize(usr)
    return firestore.collection(`users`).doc(usr.uid).set(user)
      .then(() => {
        dispatch(setUser({ user, token: '' }))
        return db.set('user', { user, token: '' })
      })
  }
}

export function getUserApi() {
  return dispatch => {
    db.get('user').then(user => {
      if (user) {
        if (user.lastSession) {
          user.lastSession = (new Date(user.lastSession)).toLocaleString()
        }
        dispatch(setUser(user))
      }
    })
  }
}

export function loginApi(usr) {
  return dispatch => {
    const user = Object.assign(
      { lastSession: dateUtc() },
      userSanitize(usr),
    )
    return firestore.collection(`users`).doc(usr.uid)
      .get().then(snap => snap.data())
      .then(u => {
        if (u.hasOwnProperty('complete') && u.complete) {
          return firestore.collection(`users`).doc(usr.uid).set(user)
            .then(() => {
              dispatch(setUser({ user, token: usr.refreshToken }))
              return db.set('user', { user, token: usr.refreshToken })
            })
            .then(() => '/admin')
        } else {
          return '/registry'
        }
      })
  }
}