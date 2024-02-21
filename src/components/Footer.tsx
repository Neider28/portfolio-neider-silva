"use client"
import Image from 'next/image'
import { Icon } from '@iconify/react';
import styles from '@/css/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div>
          <h2>Neider Silva</h2>
          <p>A passionate Full Stack Developer who loves technology and learning every day.</p>
        </div>
        <div>
          <h2>From Colombia</h2>
          <p><Icon icon={'twemoji:flag-colombia'} className={styles.colombia_icon} /></p>
        </div>
      </div>
      <p>© Copyright 2024. Made by Neider Silva</p>
    </footer>
  )
}
