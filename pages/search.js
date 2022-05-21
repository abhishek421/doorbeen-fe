import React from 'react'
import SearchBar from '../components/SearchBar'
import ShopCard from '../components/ShopCard'
import Navbar from '../components/Navbar'

export default function search() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200 p-4">
      <SearchBar />
      <div className="flex flex-col gap-4">
        <ShopCard />
      </div>
      <Navbar />
    </div>
  )
}
