import { auth, firestore } from '#/lib/firebase'
import { setError, setUser } from './redux/actions'
import MyError from '#/utils/error'

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
    await auth.signInWithEmailAndPassword(email, pwd)
    const userFirebase = auth.currentUser
    const user = await firestore.collection(collection).doc(userFirebase.uid).get().then(snap => snap.data())
    if (user) {
      dispatch(setUser(user))
      return user
    } else {
      const error = new MyError({ code: 'user-not-found-in-db' })
      dispatch(setError(error, 'login'))
      return null
    }
  } catch (err) {
    const error = new MyError(err)
    dispatch(setError(error, 'login'))
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
    await auth.createUserWithEmailAndPassword(email, password)
    const userFirebase = auth.currentUser
    const user = sanitizeUserFields(Object.assign({ email, complete: false }, userFirebase, rest))
    await firestore.collection(collection).doc(user.uid).set(user)
    await auth.currentUser.sendEmailVerification()
    dispatch(setUser(user))
  } catch (err) {
    const error = new MyError(err)
    dispatch(setError(error, 'signIn'))
  }
}

export const checkIfUserIsAuthenticated = () => {
  return true
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
    ...dataUser.map(key => (usr[key] ? { [key]: usr[key] } : {}))
  )
}