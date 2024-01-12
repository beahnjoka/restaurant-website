// Navbar.js

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from '../navbar/navbar.module.css'

const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
    <div className={styles.navbarleft}>
        <h1>FOODYY</h1>
      </div>
      <div className={styles.navbarright}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
