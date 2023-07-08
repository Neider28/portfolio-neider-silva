"use client"
import Image from 'next/image'
import welcome from '@/public/assets/hero/welcome.png'
import styles from '@/css/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_container_title}>
        <h1>Hi, I´m Neider</h1>
        <div>
          <span className={styles.i_1}>Full</span>
          <span className={styles.i_2}>Stack</span>
          <span className={styles.i_3}>Web</span>
          <span className={styles.i_4}>Developer</span>
        </div>
      </div>
      <div className={styles.hero_container_image}>
        <Image 
          src={welcome} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          alt='welcome' 
          fill 
          priority={true} 
        />
      </div>
    </section>
  )
}
