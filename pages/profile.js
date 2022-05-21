import Navbar from '../components/Navbar'
import { FaArrowLeft, FaCamera } from 'react-icons/fa'
import Link from 'next/link'
export default function profile() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-200">
      <div className="mt-10 flex w-full flex-row items-center justify-between px-8">
        <Link href={'/'}>
          <FaArrowLeft className="text-xl" />
        </Link>
        <p className="text-xl font-semibold text-black">My Profile</p>
        <div></div>
      </div>

      <div className="mt-20 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <img
            className="w-48 rounded-md ring ring-white"
            src="https://imgflip.com/s/meme/Smiling-Cat.jpg"
          />
          <div className="relative bottom-4 flex h-8 w-14 flex-row items-center justify-center rounded-xl bg-white p-1">
            <FaCamera />
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col items-start px-6">
        <p className="text-md font-light text-slate-500">Name</p>
        <p className="text-lg font-semibold text-slate-700">Mr. Billu Choudhary</p>
        <div className="mt-2 h-0.5 w-full bg-slate-300"></div>
      </div>
      <div className="mt-6 flex w-full flex-col items-start px-6">
        <p className="text-md font-light text-slate-500">Email ID</p>
        <p className="text-lg font-semibold text-slate-700">billuchoudhary@gmail.com</p>
        <div className="mt-2 h-0.5 w-full bg-slate-300"></div>
      </div>
      <div className="mt-6 flex w-full flex-col items-start px-6">
        <p className="text-md font-light text-slate-500">Mobile No.</p>
        <p className="text-lg font-semibold text-slate-700">+91 9619135676</p>
        <div className="mt-2 h-0.5 w-full bg-slate-300"></div>
      </div>
      <div className="mt-6 flex w-full flex-col items-start px-6">
        <p className="text-md font-light text-slate-500">Location</p>
        <p className="text-lg font-semibold text-slate-700">XYZ Colony, Jaipur Rajasthan</p>
        <div className="mt-2 h-0.5 w-full bg-slate-300"></div>
        <button className="h-10 w-full flex flex-col bg-red-500 mt-6 rounded-md text-white justify-center items-center text-xl font-semibold">Sign Out</button>
      </div>
      
      <Navbar />
    </div>
  )
}
