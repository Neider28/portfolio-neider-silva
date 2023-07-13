"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
      <AnchorLink href='#hero'>
        <button className={styles.nav_bar_logo}>
          <Image 
            src={logo} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            alt='logo' 
            fill 
            priority={true} 
          />
        </button>
      </AnchorLink>
      <button className={`${styles.nav_bar_mobile} ${open && `${styles.open}`}`} onClick={() => setOpen(!open)}>
        <span></span>
      </button>
      <nav className={`${styles.nav_bar_items} ${!open && `${styles.active}`}`}>
        <ul>
          <li><AnchorLink href='#about'>About</AnchorLink></li>
          <li><AnchorLink href='#education'>Education</AnchorLink></li>
          <li><AnchorLink href='#experience'>Experience</AnchorLink></li>
          <li><AnchorLink href='#skills'>Skills</AnchorLink></li>
          <li><AnchorLink href='#projects'>Projects</AnchorLink></li>
          <li><AnchorLink href='#contact'>Contact me</AnchorLink></li>
        </ul>
      </nav>
    </header>
  )
}
