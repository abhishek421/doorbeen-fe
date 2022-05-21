import React from 'react'

export default function WishCard(props) {
  return (
    <div className="mb-4 flex h-40 w-full flex-row gap-4 rounded-lg bg-white p-4 shadow-lg">
      <img
        className="h-32 w-32  rounded-lg object-contain ring ring-slate-400"
        src="https://5.imimg.com/data5/RS/FY/BN/SELLER-21085075/photoelectric-sensor-500x500.jpg"
        alt=""
      />
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-xl font-bold">{props.name}</p>
          <p className="text-xs font-light text-slate-600">
            Sensing Distance 2 - 10cm Sensor Type IR sensor Supply Voltage 3.3 -
            5V DC
          </p>
        </div>
        
        <p className={ `w-max rounded-lg text-white bg-${ props.available?"green":"red"}-500 px-1 text-lg font-bold` }>
          
         {
             props.available?"In Stock":"Pending"

         }

         </p>
      </div>
    </div>
  )
}
