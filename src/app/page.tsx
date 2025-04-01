import React from 'react'
import Header from '../components/Header/Header'
import './globals.css'
import HeroSection from '../components/HeroSection/HeroSection'
import Company from '../components/Landing Page/Company'
import Category from '../components/Landing Page/Category'
import CTA from '../components/Landing Page/CTA'
import FeaturedJobs from '../components/Landing Page/FeaturedJobs'
import LatestJobs from '../components/Landing Page/LatestJobs'
import Footer from '../components/Footer/Footer'

const page = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <Company />
      <Category />
      <CTA />
      <FeaturedJobs />
      <LatestJobs />
      <Footer />
    </main>
  )
}

export default page