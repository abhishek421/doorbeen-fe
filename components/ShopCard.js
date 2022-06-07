import { FaMapPin, FaPhone, FaRegCommentAlt, FaWhatsapp } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import gbro from '../Assets/gbro.png'

export default function ShopCard(props) {
  return (
    <div className="mb-4 flex h-40 w-full flex-row gap-4 rounded-lg bg-white p-4 shadow-lg">
      <img
        className="h-32 w-32  rounded-lg object-contain ring ring-slate-400"
        src={props.data.shopImg}
        alt=""
      />
      <div className="flex flex-grow flex-col justify-between">
        <div>
          <p className="text-xl font-bold">{props.data.shopName}</p>
          <p className="text-xs font-light text-slate-600">
            {props.data.shopLoc}
          </p>
        </div>
        <p className="inline-flex w-max items-center text-sm">
          <FaMapPin /> <span>22m</span>
        </p>
        <div className="flex flex-row justify-between text-white">
          <p className="text-md w-max rounded-lg bg-green-500 px-1 font-bold">
            OPEN NOW
          </p>
          <button className="rounded-lg bg-slate-800 px-2">
            {' '}
            <IoMdCall />{' '}
          </button>
          <button className="rounded-lg bg-slate-800 px-2">
            {' '}
            <FaRegCommentAlt />{' '}
          </button>
        </div>
      </div>
    </div>
  )
}
