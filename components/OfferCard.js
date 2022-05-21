import Image from 'next/image'
import React from 'react'

export default function OfferCard() {
  return (
    <div className='w-40 h-44 p-2 shadow-lg flex flex-col gap-2 m-2 rounded-lg bg-white'>
    <img className='rounded-md' src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-117134,msid-87975831/asian-paints.jpg" alt="" />
    <p>Get 50% off on paints</p>
    </div>
  )
}
