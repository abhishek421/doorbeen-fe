import React, { useState } from 'react'
import InputBox from '../../components/InputBox'
import Link from 'next/link'
import { auth, db, storage } from '../../firebase'
import { useRouter } from 'next/router'

function SignUp() {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const [userImg, setUserImg] = useState(null)
  const [userMob, setUserMob] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [progress, setProgress] = useState(0)
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setUserImg(e.target.files[0])
    }
  }
  const handleUpload = (uid) => {
    const uploadTask = storage
      .ref(`userImg/${uid}/${userImg.name}`)
      .put(userImg)

    uploadTask.on(
      'state_changes',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
      (error) => {
        console.log(error)
        alert(error.message)
      },
      () => {
        storage
          .ref(`userImg/${uid}`)
          .child(userImg.name)
          .getDownloadURL()
          .then((url) => {
            db.ref(`users/${uid}/`)
              .set({
                userName: userName,
                userImg: url,
                userEmail: userEmail,
                userMob: userMob,
                uid: uid,
              })
              .then(() => {
                setProgress(0)
                setUserName('')
                setUserImg(null)
                setUserEmail('')
                setUserImg('')
                setUserMob('')
              })
              .catch((error) => {
                alert(error.message)
              })
          })
      }
    )
  }

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(userEmail, password)
      .then((userCredential) => {
        // Signed in
        var uid = userCredential.user.uid
        handleUpload(uid)
        
        router.push('/')
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/Invalid-email':
            console.log(err.message)
            break
          case 'auth/weak-password':
            console.log(err.message)
            break
        }
      })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200 p-4">
      <div className="w-full max-w-md rounded-lg border bg-slate-50 px-6 py-8 shadow-2xl">
        <h1 className="mt-4 mb-12 text-center text-2xl font-medium">
          Lets find
        </h1>

        <form
          className=" mb-20"
          onSubmit={(e) => {
            e.preventDefault()
            handleSignup()
          }}
        >
          <InputBox
            type="text"
            name="userName"
            placeholder="your Name"
            value={userName}
            required
            onChange={setUserName}
          ></InputBox>
          {/* <InputBox
            type="text"
            name="shopLoc"
            placeholder="Shop Address"
            value={userLoc}
            required
            onChange={setShopLoc}
          /> */}
        
          <div className="my-4">
            <label className="text-charcoal-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Your image
            </label>
            <input
              className="w-full rounded-md border-0 bg-white p-4 shadow-lg focus:outline-none"
              type="file"
              name="userImg"
              
              placeholder="Shop Logo"
              onChange={handleChange}
              accept="image/*"
            />
          </div>

          {/* <label className="text-charcoal-darker mb-2 block text-xs font-bold uppercase tracking-wide">
              Display Stock Information (To customer)
            </label>
            <select
              required
              value={exp}
              className="w-full rounded-md border-0 p-4 shadow-lg focus:outline-none"
              onChange={({ target: { value } }) => setExp(value)}
            >
              {[
                ['Yes', 'Yes'],
                ['No', 'No'],
              ].map(([value, text]) => (
                <option
                  className="w-full rounded-md border-0 p-4 shadow-lg focus:outline-none"
                  value={value}
                >
                  {text}
                </option>
              ))}
            </select> */}

          <InputBox
            type="text"
            name="userMob"
            placeholder="Mobile No."
            value={userMob}
            onChange={setUserMob}
          ></InputBox>
          <InputBox
            type="text"
            name="userEmail"
            placeholder="Email"
            value={userEmail}
            onChange={setUserEmail}
          ></InputBox>

          <InputBox
            type="password"
            name="password"
            placeholder="Create Password"
            value={password}
            onChange={setPassword}
          ></InputBox>

          <InputBox
            type="password"
            name="password2"
            placeholder="ReEnter Password"
            value={password2}
            onChange={setPassword2}
          ></InputBox>

          <button
            type="submit"
            className=" w-full rounded-lg bg-green-500 p-2 text-lg font-semibold text-white shadow-xl"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center">
            New User?{' '}
            <span className="font-semibold">
              <Link href={'/signin'}> SignIn </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
