"use client"
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import rolls_royce from '@/assets/contact/rolls-royce-2.png'
import { Icon } from '@iconify/react';
import styles from '@/css/Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact_container} id='contact'>
      <h2>Contact</h2>
      <div className={styles.contact_container_content}>
        <a href='https://github.com/Neider28' target='_blank'>
          <div className={styles.contact_layer}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><Icon icon="bytesize:github" className={styles.contact_icon} /></span>
          </div>
          <div className={styles.contact_text}>GitHub</div>
        </a>
        <a href='https://twitter.com/neiders28' target='_blank'>
          <div className={styles.contact_layer}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><Icon icon="line-md:twitter-x" className={styles.contact_icon} /></span>
          </div>
          <div className={styles.contact_text}>X</div>
        </a>
        <a href='https://www.linkedin.com/in/neidersilva28/' target='_blank'>
          <div className={styles.contact_layer}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><Icon icon="bi:linkedin" className={styles.contact_icon} /></span>
          </div>
          <div className={styles.contact_text}>Linkedin</div>
        </a>
        <a href='mailto:neidersilva2802@gmail.com' target='_blank'>
          <div className={styles.contact_layer}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><Icon icon="basil:gmail-solid" className={styles.contact_icon} /></span>
          </div>
          <div className={styles.contact_text}>Gmail</div>
        </a>
      </div>
      <Fade direction='left'>
      <div className={styles.contact_container_image}>
        <Image 
          src={rolls_royce} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          alt='welcome' 
          fill 
          priority={true} 
        />
      </div>
      </Fade>
    </section>
  )
}
