import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import logo from '../Assets/logo.png'
import Navbar from '../components/Navbar'
import OfferCard from '../components/OfferCard'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import ShopCard from '../components/ShopCard'
import Slider from '../components/Slider'

function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-200 px-4 pb-10 pt-2">
      <Head>
        <title>Doorbeen</title>
        <link rel="icon" href="/logo-c-w.png" />
      </Head>
      <div className="flex flex-row items-center justify-between">
        <Image src={logo} objectFit="contain" width={'100'} height="50" />
        <Link href={'/profile'}>
          <img
            src="https://imgflip.com/s/meme/Smiling-Cat.jpg"
            className="h-10 w-10 rounded-full shadow-lg"
          />
        </Link>
      </div>
      <SearchBar />
      <Slider />
      <p className="text-lg font-semibold">Top Offers around your area</p>
      <ShopCard />
      <Carousel
        className="w-full"
        infiniteLoop
        showStatus={false}
        showIndicators={false}
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
      <div className="mb-10">
        <ProductCard />
        <ProductCard />
      </div>
      <Navbar />
    </div>
  )
}

export default Home
