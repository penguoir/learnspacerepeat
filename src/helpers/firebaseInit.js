import * as firebase from 'firebase'

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDuq_AKnkpaF775MmHbzEKynpQ9KCAyc7c',
      authDomain: 'learnspacerepeat.firebaseapp.com',
      databaseURL: 'https://learnspacerepeat.firebaseio.com',
      projectId: 'learnspacerepeat',
      storageBucket: '',
      messagingSenderId: '494121320525',
      appId: '1:494121320525:web:e7011aafbd4439b8'
    })
  }
}

