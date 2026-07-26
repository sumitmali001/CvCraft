import React from 'react'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Testimonials from '../components/Home/Testimonials'
import Contact from '../components/Home/Contact'
import Footer from '../components/Home/Footer'
const Home = () => {
  return (
    <div>
      <Banner />
      <Hero/>
      <Features/>
      <Testimonials/>
      <Contact/>  
      <Footer/>
    </div>
  )
}

export default Home
