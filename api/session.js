import { auth, firestore } from '#/lib/firebase'
import { setError, setLoading, setSessions } from './redux/actions'
import MyError from '#/utils/error'
import { getOtherCollection, capitalize, guid } from '#/utils'
import db from '#/lib/db'

export const dataSession = [
  'active',
  'date',
  'done',
  'num',
  'idAppear',
  'idConsultant',
  'idDoctor',
  'linkScheduler',
  'numTotalSessions',
  'sessionUID',
  'uid',
]

const uidTestUser = {
  doctor: `u6S5DbGP0pVUzgvpo7YMvqnEpJp1`,
  consultant: `8bjtSqPpCxQSnuvzjvW2MOvnokO2`,
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

function sanitizeSessionFields(session) {
  return Object.assign(
    ...dataSession.map(key => (session.hasOwnProperty(key) ? { [key]: session[key] } : {}))
  )
}

export const getSessions = collection => async dispatch => {
  try {
    dispatch(setLoading(true))
    const userFirebase = auth.currentUser
    const querySnapshot = await firestore.collection('sessions').where(`id${capitalize(collection)}`, '==', userFirebase.uid).get()
    let sessions = []
    querySnapshot.forEach(doc => {
      sessions.push(Object.assign({}, doc.data(), { id: doc.id }))
    })
    const otherCollection = getOtherCollection(collection)
    if (sessions.length) {
      const user = await firestore.collection(otherCollection)
                    .doc(sessions[0][`id${capitalize(otherCollection)}`]).get().then(snap => snap.data())
      sessions = sessions.map(session => {
        session = sanitizeSessionFields(session)
        session[otherCollection] = user
        return session
      })
    } else {
      const ref = firestore.collection('sessions')
      const batch = firestore.batch()
      const uid = guid()
      ;(new Array(8)).fill(1).forEach(async (_, i) => {
        const id = guid()
        const session = getSession(uid, userFirebase.uid, collection, i + 1)
        batch.set(ref.doc(id), session)
        const user = await firestore.collection(otherCollection).doc(uidTestUser[otherCollection]).get().then(snap => snap.data())
        sessions.push(Object.assign({}, session, { uid: id, [otherCollection]: user }))
      })
      await batch.commit()
    }
    dispatch(setSessions(sessions))
    dispatch(setLoading(false))
  } catch (err) {
    const error = new MyError(err)
    dispatch(setError(error, 'getSessions'))
    dispatch(setLoading(false))
  }
}

function getSession(uid, idUser, collection, idx) {
  return Object.assign(
    {},
    ...dataSession.map(key => {
      const value = {}
      if (key === `id${capitalize(collection)}`) {
        value[key] = idUser
      }
      if (key === 'sessionUID') {
        value[key] = uid
      }
      if (key === `idAppear` || key === `linkScheduler`) {
        value[key] = guid()
      }
      if (key === 'done' || key === 'active') {
        value[key] = false
      }
      if (key === 'date') {
        value[key] = (new Date()).addDays(1)
      }
      if (key === `id${capitalize(getOtherCollection(collection))}`) {
        value[key] = uidTestUser[getOtherCollection(collection)]
      }
      if (key === `numTotalSessions`) {
        value[key] = 8
      }
      if (key === 'num') {
        value[key] = idx
      }
      return value
    })
  )
}