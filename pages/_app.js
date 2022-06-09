import { useEffect, useState } from 'react'
import AppContext from '../AppContext'
import { auth, db } from '../firebase'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [fbuser, setFbUser] = useState(null)
  const [user, setUser] = useState(null)


  async function getData(uid) {
    await db.ref(`users/${uid}`).on('value', (snapshot) => {
      if (snapshot.exists()) {
        var data = snapshot.val()
        setUser(data)
      } else {
        console.log('No data found')
      }
    })
  }

  const authListner = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('-->>' + user.uid)
        setFbUser(user)
        getData(user.uid)
      } else {
        setFbUser()
        setUser(null)
      }
    })
  }
  useEffect(() => {
    authListner()
  }, [fbuser])

  return (
    <AppContext.Provider
      value={{
        state: {
          fbuser: fbuser,
          user: user,
        },
        setUser: setUser,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
