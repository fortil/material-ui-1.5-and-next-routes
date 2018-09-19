import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCJpChwuiDsgdwGAXLduaqOsqZgC-76-IU',
  authDomain: 'progressus-dev.firebaseapp.com',
  databaseURL: 'https://progressus-dev.firebaseio.com',
  projectId: 'progressus-dev',
  storageBucket: 'progressus-dev.appspot.com',
  messagingSenderId: '657732417625'
}
if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}
const fs = firebase.firestore()
const settings = { timestampsInSnapshots: true }
fs.settings(settings)

export const auth = firebase.auth()
export const firestore = fs
export const messaging = firebase.messaging
export const functions = firebase.functions