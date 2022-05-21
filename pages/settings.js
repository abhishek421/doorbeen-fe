import Link from 'next/link'
import React from 'react'
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa'
import Navbar from '../components/Navbar'

export default function settings() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-200">
      <div className="mt-10 flex w-full flex-row items-center justify-between px-8">
        <Link href={'/'}>
          <FaArrowLeft className="text-xl" />
        </Link>
        <p className="text-xl font-semibold text-black">Settings</p>
        <div></div>
      </div>
      <div className="mt-10 flex w-full flex-col items-center gap-4 px-2">
        {[
          'Account',
          'Set Location',
          'Notifications',
          'Contact Us',
          'About',
        ].map((item) => (
          <div className="flex h-10 w-full flex-row items-center justify-between rounded-lg bg-white px-2 text-lg font-semibold shadow-lg ring ring-slate-600">
            {item}
            <FaAngleRight />
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  )
}
