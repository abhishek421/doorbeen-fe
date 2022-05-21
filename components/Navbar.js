import Link from 'next/link'
import {
  FaHome,
  FaRegCommentAlt,
  FaRegListAlt,
  FaRegSun,
  FaSearch,
} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className="fixed bottom-0 inline-flex h-16 w-full flex-row items-center justify-around gap-2 self-center rounded-t-xl bg-white shadow-inner text-xl">
      <Link href={'/'}>
      <FaHome />
      </Link>
      <Link href={'/search'}>
      <FaSearch />
      </Link>
      <Link href={'/wishlist'}>
      <FaRegListAlt />
      </Link>
      <Link href={'/messages'}>
      <FaRegCommentAlt />
      </Link>
      <Link href={'/settings'}>
      <FaRegSun />
      </Link>
    </div>
  )
}
