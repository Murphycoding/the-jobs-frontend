import React from 'react'
import Navbar from  './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import BookingSteps from './components/BookingSteps'
import { NewsletterTexts } from './components/particles/DataLists'
import NewsLetter from './components/NewsLetter'


const HomePage = () => {
  return (

    <div className="homepage">
      <Navbar/>  
      <Header/>
      <Services/>
      <BookingSteps/>
      <NewsLetter/>

  
    </div>
  )
}

export default HomePage