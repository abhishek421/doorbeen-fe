import Link from 'next/link'
import WishCard from '../components/WishCard'
import { FaArrowLeft } from 'react-icons/fa'
import Navbar from '../components/Navbar'

export default function wishlist() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-200">
        <div className="mt-10 flex w-full flex-row items-center justify-between px-8">
        <Link href={'/'}>
          <FaArrowLeft className="text-xl" />
        </Link>
        <p className="text-xl font-semibold text-black">Wishlist</p>
        <div></div>
      </div>
      
       <div className="px-4 mt-6 flex flex-col gap-4">
       <p className="text-lg font-semibold">Items back in stock</p>
       <WishCard name="IR Sensor" available={true}/>
       </div>
       <div className="px-4 mt-4 flex flex-col gap-4">
       <p className="text-lg font-semibold">Pending Items</p>
       <WishCard name="UV Sensor" available={false}/>
       </div>       
       <Navbar />
        
    </div>
  )
}
