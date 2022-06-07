import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ShopCard from '../components/ShopCard'
import Navbar from '../components/Navbar'
import { db } from '../firebase'

export default function search() {
  const [shops, setShops] = useState([])
  const [query, setQuery] = useState('')

  async function getData() {
    await db.ref(`shops/`).on('value', (snapshot) => {
      if (snapshot.exists()) {
        var data = Object.values(snapshot.val())
        setShops(data)
      } else {
        console.log('No data found')
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="flex min-h-screen flex-col bg-slate-200 p-4">
      <SearchBar value={query} onChange={setQuery} />
      <div className="flex flex-col items-center gap-4">
        {query?(shops.map((data) => (
            <ShopCard data={data} />
          ))):null}
      </div>
      <Navbar />
    </div>
  )
}
