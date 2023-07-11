"use client"
import Image from 'next/image'
import { Icon } from '@iconify/react';
import styles from '@/css/Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact_container}>
      <h2>Contact</h2>
      <div className={styles.contact_container_content}>
        <a href='https://github.com/Neider28'>
          <div className={styles.contact_layer}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><Icon icon="ri:github-fill" className={styles.contact_icon} /></span>
          </div>
          <div className={styles.contact_text}>GitHub</div>
        </a>
      </div>
    </section>
  )
}
