import Link from 'next/link'
import React from 'react'
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa'
import Navbar from '../components/Navbar'

export default function messages() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200 p-4">
      <div className="mt-10 flex w-full flex-row items-center justify-between px-8">
        <Link href={'/'}>
          <FaArrowLeft className="text-xl" />
        </Link>
        <p className="text-xl font-semibold text-black">Messages</p>
        <div></div>
      </div>
      <div></div>
      <div>
        <p className="mt-6 text-lg font-semibold">New</p>
        <div className="mt-6 flex flex-col gap-4">
          {['GBRO', 'MAHESH', 'Donut'].map((item) => (
            <div className="flex w-full flex-row items-center justify-between gap-4 rounded-md bg-white p-2 ring ring-slate-400">
              <div className="flex flex-row items-center gap-4">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://5.imimg.com/data5/SELLER/Default/2021/11/OT/PQ/AO/42801883/image-50407681-1000x1000.JPG"
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{item}</p>
                  <p className="text-md font-light text-slate-600">
                    Or bhai kaisa hai?
                  </p>
                </div>
              </div>
              <FaAngleRight />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mt-6 text-lg font-semibold">Earlier</p>
        <div className="mt-6 flex flex-col gap-4">
          {['GBRO', 'HERA', 'Donut'].map((item) => (
            <div className="flex w-full flex-row items-center justify-between gap-4 rounded-md bg-white p-2 ring ring-slate-400">
              <div className="flex flex-row items-center gap-4">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://5.imimg.com/data5/SELLER/Default/2021/11/OT/PQ/AO/42801883/image-50407681-1000x1000.JPG"
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{item}</p>
                  <p className="text-md font-light text-slate-600">
                    Or bhai kaisa hai?
                  </p>
                </div>
              </div>
              <FaAngleRight />
            </div>
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  )
}
