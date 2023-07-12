"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import logo from '@/public/logo.png'
import styles from '@/css/Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    });
  }, []);

  return (
    <header className={`${styles.nav_bar} ${background && `${styles.background_dark}`}`}>
      <button className={styles.nav_bar_logo}>
        <Image 
          src={logo} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          alt='logo' 
          fill 
          priority={true} 
        />
      </button>
      <button className={styles.nav_bar_mobile} onClick={() => setOpen(!open)}>
        <span></span>
      </button>
      <nav className={`${styles.nav_bar_items} ${!open && `${styles.active}`}`}>
        <ul>
          <li onClick={() => setOpen(!open)}>
            <Icon icon='ep:close-bold' className={styles.nav_bar_close} />
          </li>
          <li>About</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact me</li>
        </ul>
      </nav>
    </header>
  )
}
