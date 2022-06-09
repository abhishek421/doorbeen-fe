import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import  Link  from 'next/link'
import Image from 'next/image'
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import { db } from '../../firebase'
import ProductCard from '../../components/ProductCard'
export default function Shop() {
  const router = useRouter()
  const { shopId } = router.query
  const [shop, setShop] = useState(null)
  async function getData(shopId) {
    await db.ref(`shops/${shopId}`).on('value', (snapshot) => {
      if (snapshot.exists()) {
        var data = snapshot.val()
        setShop(data)
      } else {
        console.log('No data found')
      }
    })
  }
  
}

  useEffect(() => {
    getData(shopId)
  }, [shopId])
  return(
<div className="flex min-h-screen flex-col bg-slate-200 p-4">
      <div className="mt-10 flex w-full flex-row items-center justify-between px-8">
        <Link href={'/'}>
          <FaArrowLeft className="text-xl" />
        </Link>
        <p className="text-xl font-semibold text-black">{shop?.shopName}</p>
        <div>

        </div>
      </div>
      <div className=''>
          <img className=' p-4 rounded-2xl shadow-xl'  src={shop?.shopImg} /></div>
          {/* <div className="flex flex-col items-center gap-4">
        {shop.products.map((data) => (
          <ProductCard data={data} />
        ))}
      </div> */}
       

      <Navbar />
    </div>

)}
