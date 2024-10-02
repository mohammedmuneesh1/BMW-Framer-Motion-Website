import React from 'react'
import HeroPage from './subPages/HeroPage'
import Header from "../components/Header/Header"
// import Header from '../components/Header/Header'

export default function HomePage() {
  return (

    <section className='max-w-screen-2xl mx-auto'>
      {/* <Header/> */}
        <Header/>
        <HeroPage/>

    </section>

  )
}
