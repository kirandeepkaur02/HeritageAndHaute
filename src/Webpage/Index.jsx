import React from 'react'
import NavBar from "./Navbar"
import Hero from "./Hero"
import Collections from "./Collections"
import Signature from "./Signature"
import BrandStory from "./BrandStory"
import WhyUs from "./WhyUs"
import ConsulationBanner from './ConsulationBanner'
import LookBook from './LookBook'
import Testimonial from './Testimonial'
import InstagramShowcase from './InstagramShowcase'
import Footer from "./Footer"

const index = () => {
  return (
    <div>
    <NavBar />
    <Hero />
    <Collections />
    <Signature />
    <BrandStory />
    <WhyUs />
    <ConsulationBanner />
    <LookBook />
    <Testimonial />
    <InstagramShowcase />
    <Footer />
    </div>
  )
}
export default index 