import React from 'react'

export default function ProductCard() {
  return (
    <div className="mb-4 flex h-40 w-full flex-row gap-4 rounded-lg bg-white p-4 shadow-lg">
      <img
        className="h-32 w-32  rounded-lg object-contain ring ring-slate-400"
        src="https://5.imimg.com/data5/RS/FY/BN/SELLER-21085075/photoelectric-sensor-500x500.jpg"
        alt=""
      />
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-xl font-bold">IR Sensor</p>
          <p className="text-xs font-light text-slate-600">
            Sensing Distance 2 - 10cm Sensor Type IR sensor Supply Voltage 3.3 -
            5V DC
          </p>
        </div>
        <p className="w-max text-sm">
          Available Stock: <span className='rounded-lg bg-red-500 px-1 text-sm font-bold'>22</span>
        </p>
        <p className="w-max rounded-lg bg-green-500 px-1 text-lg font-bold">
          ₹50.<span className='text-xs'>00</span>
        </p>
      </div>
    </div>
  )
}
