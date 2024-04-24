"use client"
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import rolls_royce from '@/assets/experience/rolls-royce-3.png'
import styles from '@/css/Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.experience_container} id='experience'>
      <h2>Experience</h2>
      <div className={styles.experience_container_content}>
        <article className={styles.experience_card}>
          <div>
            <h3>Noysi</h3>
            <span>2024, Mar - 2024, Apr</span>
            <span>Full Time Remote</span>
            <p>Frontend Developer</p>
          </div>
        </article>
        <article className={styles.experience_card}>
          <div>
            <h3>Whynot? mih</h3>
            <span>2023, Dec - 2024, Feb</span>
            <span>Full Time Remote</span>
            <p>Full Stack Developer</p>
          </div>
        </article>
        <article className={styles.experience_card}>
          <div>
            <h3>Rock Did It</h3>
            <span>2023, Jun - 2023, Dec</span>
            <span>Full Time Remote</span>
            <p>Full Stack Developer</p>
          </div>
        </article>
        <article className={styles.experience_card}>
          <div>
            <h3>Chain The Barber</h3>
            <span>2022, Oct - 2023, Jun</span>
            <span>Part Time Remote</span>
            <p>Frontend Developer</p>
          </div>
        </article>
      </div>
      <Fade direction='left'>
      <div className={styles.experience_container_image}>
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
