import React from 'react'
import styles from '../herosection/hero.module.css'
import { Outlet, Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={styles.herocontainer}>
        <div className={styles.herocontent}>
        <h3 className={styles.title}>welcome to our restaurant</h3>
        <p className={styles.name}>experince the finest dining in a cozy atmosphere</p>
        <Link to="/menu" className={styles.menuLink}>
        <button className={styles.menu}>Explore Menu</button>
        </Link>
    </div>
    <Outlet/>
    </div>
  )
}

export default Hero