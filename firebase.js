// import firebase from 'firebase/app'

// // const firebaseApp = firebase.initializeApp({
// //   apiKey: 'AIzaSyBkpLxhjY85tEx1ouPG0I6EyKpRgZfIWWI',
// //   authDomain: 'doorbeen1.firebaseapp.com',
// //   projectId: 'doorbeen1',
// //   storageBucket: 'doorbeen1.appspot.com',
// //   messagingSenderId: '567671916586',
// //   appId: '1:567671916586:web:029e8b127143a0f0659b53',
// //   measurementId: 'G-252Z38W0X7',
// //   databaseURL: 'https://doorbeen1-default-rtdb.firebaseio.com/',
// // })

// // const db = firebaseApp.database()
// // const auth = firebaseApp.auth()
// // const storage = firebaseApp.storage()
// // var gProvider = new firebaseApp.auth.GoogleAuthProvider()

// // export { db, auth, storage, gProvider }

// import { initializeApp } from 'firebase/app'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyBkpLxhjY85tEx1ouPG0I6EyKpRgZfIWWI',
//   authDomain: 'doorbeen1.firebaseapp.com',
//   databaseURL: 'https://doorbeen1-default-rtdb.firebaseio.com',
//   projectId: 'doorbeen1',
//   storageBucket: 'doorbeen1.appspot.com',
//   messagingSenderId: '567671916586',
//   appId: '1:567671916586:web:029e8b127143a0f0659b53',
//   measurementId: 'G-252Z38W0X7',
// }

// // Initialize Firebase
// if (!firebase.apps.length) {
//   var app = firebase.initializeApp(firebaseConfig)
// } else {
//   var app = firebase.app() // if already initialized, use that one
// }

// // const analytics = getAnalytics(app)
// const db = app.database
// const auth = app.auth
// const storage = app.storage
// // var gProvider = new app.auth.GoogleAuthProvider()

// export { db, auth, storage }

import firebase from 'firebase'

// const firebaseApp = firebase.initializeApp({
//   apiKey: 'AIzaSyBkpLxhjY85tEx1ouPG0I6EyKpRgZfIWWI',
//   authDomain: 'doorbeen1.firebaseapp.com',
//   databaseURL: 'https://doorbeen1-default-rtdb.firebaseio.com',
//   projectId: 'doorbeen1',
//   storageBucket: 'doorbeen1.appspot.com',
//   messagingSenderId: '567671916586',
//   appId: '1:567671916586:web:029e8b127143a0f0659b53',
//   measurementId: 'G-252Z38W0X7',
// })

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBkpLxhjY85tEx1ouPG0I6EyKpRgZfIWWI',
    authDomain: 'doorbeen1.firebaseapp.com',
    databaseURL: 'https://doorbeen1-default-rtdb.firebaseio.com',
    projectId: 'doorbeen1',
    storageBucket: 'doorbeen1.appspot.com',
    messagingSenderId: '567671916586',
    appId: '1:567671916586:web:029e8b127143a0f0659b53',
    measurementId: 'G-252Z38W0X7',
  })
}

const db = firebase.database()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
