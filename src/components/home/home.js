import React from 'react'
import styles from '../home/home.module.css'
import Navbar from '../navbar/navbar'
import Hero from '../herosection/hero'

function Home() {
  return (
    <div className={styles.homecontainer}>
        <Navbar/>
        <Hero />
    </div>
  )
}

export default Home