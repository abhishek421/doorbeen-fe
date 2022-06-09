import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import AppContext from '../AppContext'
import logo from '../Assets/logo.png'
import Navbar from '../components/Navbar'
import OfferCard from '../components/OfferCard'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import ShopCard from '../components/ShopCard'
import Slider from '../components/Slider'
import { db } from '../firebase'

function Home() {
  const [shops, setShops] = useState([])
  const context = useContext(AppContext)
  const user = context.state.user
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
    <div className="flex min-h-screen w-full flex-col bg-slate-200 px-4 pb-10 pt-2">
      <Head>
        <title>Doorbeen</title>
        <link rel="icon" href="/logo-c-w.png" />
      </Head>
      <div className="flex flex-row mb-4 items-center justify-between">
        <Image src={logo} objectFit="contain" width={'100'} height="50" />
        <Link href={user?`/profile`:`/auth/signin`}>
          <img
            src={user?user.userImg:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
            className="h-10 w-10 rounded-full shadow-lg"
          />
        </Link>
      </div>
      {/* <SearchBar /> */}
      <Slider />
      <p className="text-lg font-semibold">Top Offers around your area</p>
      <Carousel
        className="w-full"
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div className="flex flex-row justify-evenly">
          <OfferCard />
          <OfferCard />
        </div>
        <div className="flex flex-row justify-evenly">
          <OfferCard />
          <OfferCard />
        </div>
        <div className="flex flex-row justify-evenly">
          <OfferCard />
          <OfferCard />
        </div>
      </Carousel>
      {/* <div className="mb-10">
        <ProductCard />
        <ProductCard />
      </div> */}
      <div className="flex flex-col items-center gap-4">
        {shops.map((data) => (
          <ShopCard data={data} />
        ))}
      </div>
      <Navbar />
    </div>
  )
}

export default Home
