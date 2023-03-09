import React from 'react'
import styles from "./Header.module.css"

function Header() {
  return (
    <>
    <div className={styles.container}>


    <div className={styles.icon} >
<h2>
Cotgin Analytics
</h2>
    
    </div>
    <div className={styles.navbar}>
    <h2>Home</h2>
    <h2>About</h2>
    <h2>Services</h2>
    <h2>Our Team</h2>
    <h2>Blog</h2>
    <h2>Contact Us</h2>
    </div>
    </div>
    </>
  )
}

export default Header