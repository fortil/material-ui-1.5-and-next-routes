import { auth, firestore } from '#/lib/firebase'
import { setError, setUser, setLoading } from './redux/actions'
import MyError from '#/utils/error'
import db from '#/lib/db'

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
  'direction',
  'uid',
  'ocupy',
  'photoURL',
  'complete',
  'lastname'
]

export const login = (email, pwd, collection) => async dispatch => {
  try {
    dispatch(setLoading(true))
    await auth.signInWithEmailAndPassword(email, pwd)
    const userFirebase = auth.currentUser
    const userDb = await firestore.collection(collection).doc(userFirebase.uid).get().then(snap => snap.data())
    let user = userDb
    if (user) {
      if (userFirebase.emailVerified !== user.emailVerified) {
        user = sanitizeUserFields(Object.assign({}, userDb, userFirebase))
        await firestore.collection(collection).doc(user.uid).update(user)
      }
      dispatch(setUser(user))
      dispatch(setLoading(false))
      return user
    } else {
      const error = new MyError({ code: 'user-not-found-in-db' })
      dispatch(setError(error, 'login'))
      dispatch(setLoading(false))
      return null
    }
  } catch (err) {
    const error = new MyError(err)
    dispatch(setError(error, 'login'))
    dispatch(setLoading(false))
  }
}

export const resentPassword = async email => {
  try {
    await auth.sendPasswordResetEmail(email)
    return true
  } catch (err) {
    const error = new MyError(err)
    dispatch(setError(error, 'resentPassword'))
  }
}

export const sendEmailVerification = async () => {
  try {
    await auth.currentUser.sendEmailVerification()
    return true
  } catch (err) {
    const error = new MyError(err)
    dispatch(setError(error, 'sendEmailVerification'))
  }
}

export const signIn = ({ email, password, ...rest }, collection) => async dispatch => {
  try {
    dispatch(setLoading(true))
    await auth.createUserWithEmailAndPassword(email, password)
    const userFirebase = auth.currentUser
    const user = sanitizeUserFields(Object.assign({ email, complete: false }, rest, userFirebase))
    await firestore.collection(collection).doc(user.uid).set(user)
    await auth.currentUser.sendEmailVerification()
    dispatch(setUser(user))
    dispatch(setLoading(false))
  } catch (err) {
    const error = new MyError(err)
    dispatch(setError(error, 'signIn'))
    dispatch(setLoading(false))
  }
}

export const checkIfUserIsAuthenticated = async () => {
  const userFirebase = auth.currentUser
  let isUser
  let isVerified
  let isComplete
  if (userFirebase) {
    isUser = true
    if (userFirebase.emailVerified) {
      isVerified = true
      if (process.browser) {
        let user = await db.get('user')
        if (user && user.complete) {
          isComplete = true
        }
      }
    }
  }
  return { isUser, isVerified, isComplete }
}

export const getDoctor = doctorId => {
  let ids = []
  if (Array.isArray(doctorId)) {
    ids = Array.from(new Set(doctorId))
  } else {
    ids = [doctorId]
  }
  ids = ids.map(id => Object.assign(
    {},
    ...dataUser.map(key => (key === 'uid' ? { [key]: 'u6S5DbGP0pVUzgvpo7YMvqnEpJp1' } : { [key]: ' asdasda sda sasd asd sa' }))
  ))
  return ids
}

function sanitizeUserFields(usr, date) {
  return Object.assign(
    date ? { lastSession: new Date() } : {},
    ...dataUser.map(key => (usr.hasOwnProperty(key) ? { [key]: usr[key] } : {}))
  )
}