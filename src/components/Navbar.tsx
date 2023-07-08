"use client"
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'
import styles from '@/css/Navbar.module.css'

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <header className={styles.nav_bar}>
      <button className={styles.nav_bar_logo}>
        <Image 
          src={logo} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          alt='logo' 
          fill 
          priority={true} 
        />
      </button>
      <button className={styles.nav_bar_mobile} onClick={() => setClicked(!clicked)}>
        <span></span>
      </button>
      <nav className={`${styles.nav_bar_items} ${!clicked && `${styles.active}`}`}>
        <ul>
          <li>About</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
