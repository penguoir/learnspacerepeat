import * as firebase from 'firebase'

var app

if (!firebase.apps.length) {
  app = firebase.initializeApp({
    apiKey: 'AIzaSyDuq_AKnkpaF775MmHbzEKynpQ9KCAyc7c',
    authDomain: 'learnspacerepeat.firebaseapp.com',
    databaseURL: 'https://learnspacerepeat.firebaseio.com',
    projectId: 'learnspacerepeat',
    storageBucket: '',
    messagingSenderId: '494121320525',
    appId: '1:494121320525:web:e7011aafbd4439b8'
  })
}

export default app