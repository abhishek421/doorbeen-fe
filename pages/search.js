import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ShopCard from '../components/ShopCard'
import Navbar from '../components/Navbar'
import { db } from '../firebase'
import Fuse from 'fuse.js'
export default function search() {
  const [shops, setShops] = useState([])
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')

  const fuse = new Fuse(shops, {
    keys: ['shopName','shopLoc'],
    threshold:0.5
})
  async function getData() {
    await db.ref(`shops/`).on('value', (snapshot) => {
      
      if (snapshot.exists()) {
       
        var data = Object.values(snapshot.val())
        setShops(data)
        // console.log(data)
      } else {
        console.log('No data found')
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    setResult(fuse.search(query))
    // console.log(fuse.search(query))
  }, [query])
  return (
    <div className="flex min-h-screen flex-col bg-slate-200 p-4">
      <SearchBar value={query} onChange={setQuery} />
      <div className="flex flex-col items-center gap-4">
        {query?(result.map((data) => (
            <ShopCard data={data.item} />
          ))):null}
      </div>
      <Navbar />
    </div>
  )
}
