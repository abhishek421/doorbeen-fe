import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Slider() {
  return (
    <Carousel className="" showStatus={false}>
      <div className="h-40 w-full rounded-xl bg-yellow-300" />
      <div className="h-40 w-full bg-blue-300" />
      <div className="h-40 w-full bg-red-300" />
      <div className="h-40 w-full bg-green-300" />
    </Carousel>
  )
}
