import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../AppContext'
import { auth } from '../../firebase'

import { useRouter } from 'next/router'
function SignIn() {
  const value = useContext(AppContext)
  const user = value.state.user
  const setUser = value.setUser
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const router = useRouter()
  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = () => {
    clearErrors()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user.uid)
        setUser(userCredential.user)
        router.replace('/')
    })
      .catch((err) => {
        switch (err.code) {
          case 'auth/Invalid-email':
          case 'auth/user-disable':
          case 'auth/user-not-found':
            setEmailError(err.message)
            break
          case 'auth/wrong-password':
            setPasswordError(err.message)
            break
        }
      })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleLogin()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200 p-4">
      <div className="w-full max-w-md rounded-lg border bg-white px-6 py-8 shadow-2xl">
        <h1 className="mt-4 mb-12 text-center text-2xl font-medium">
          Log in to your account
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`mb-4 w-full rounded-md border p-2 text-xl outline-none transition duration-150 ease-in-out`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
            <p>{emailError}</p>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`text-primary mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
            />
            <p>{passwordError}</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`border-green focus:border-green-dark  text-md w-full rounded border bg-green-600 py-3 px-4 font-semibold text-white focus:outline-none`}
            >
              Login
            </button>
            <p className="mt-4">
              New User?{' '}
              <span className="font-semibold">
                <Link href={'signup'}> SignUp </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
