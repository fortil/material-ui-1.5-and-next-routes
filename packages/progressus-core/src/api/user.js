import { firestore, auth } from '../lib/firebase'
import { setUser } from '../redux/actions'
import db from '../lib/db'
import { dateUtc, isEquivalent } from '../utils'

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
  'uid',
  'photoURL',
  'complete',
  'lastname'
]

export function checkIfUserIsAuthenticated() {
  const user = auth().currentUser
  console.log(user, 'user')
  return true
}

export function saveUserDB(user) {
  return db.set('user', user)
}

export function userSanitize(user) {
  return Object.assign(
    {}, 
    ...dataUser.filter(key => user.hasOwnProperty(key)).map(data => ({ [data]: user[data] }))
  )
}

export function registerUserApi(usr, collection) {
  return dispatch => {
    const user = userSanitize(usr)
    return firestore.collection(collection).doc(usr.uid).set(user)
      .then(() => {
        dispatch(setUser({ user, token: '' }))
        return saveUserDB({ user, token: '' })
      })
  }
}

export function getUserApi(collection) {
  return dispatch => {
    db.get('user').then(({ user: userLocal, token }) => {
      if (userLocal) {
        if (userLocal.lastSession) {
          userLocal.lastSession = (new Date(user.lastSession)).toLocaleString()
        }
        dispatch(setUser({ user: userLocal }))

        firestore.collection(collection).doc(userLocal.uid)
          .get().then(snap => snap.data())
          .then(userDB => {
            const userGot = userSanitize(userDB)
            if (!isEquivalent(userGot, user)) {
              dispatch(setUser({ user: userGot }))
              return saveUserDB({ user, token })
            } else {
              return Promise.resolve(userGot)
            }
          })
      }
    })
  }
}

export function loginApi(usr, collection) {
  return dispatch => {
    const user = Object.assign(
      { lastSession: dateUtc() },
      userSanitize(usr),
    )
    return firestore.collection(collection).doc(usr.uid)
      .get().then(snap => snap.data())
      .then(u => {
        if (u && u.hasOwnProperty('complete') && u.complete) {
          return firestore.collection(collection).doc(usr.uid).set(user)
            .then(() => {
              dispatch(setUser({ user, token: usr.refreshToken }))
              return saveUserDB({ user, token: usr.refreshToken })
            })
            .then(() => '/admin')
        } else if (u) {
          return '/registry'
        } else {
          return '/sign'
        }
      })
  }
}