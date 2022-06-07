import { FaFilter } from 'react-icons/fa'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="my-4 flex flex-row items-center justify-between gap-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search Shop, Product.."
        className="h-10 flex-grow rounded-lg p-2 shadow-lg ring ring-slate-400"
      />
      <div className="rounded-lg bg-white p-3 shadow-lg  ring ring-slate-400">
        <FaFilter />
      </div>
    </div>
  )
}
