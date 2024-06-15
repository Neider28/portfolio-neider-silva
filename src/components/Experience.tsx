"use client"
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import { Icon } from '@iconify/react'
import rolls_royce from '@/assets/experience/rolls-royce-3.png'
import styles from '@/css/Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.experience_container} id='experience'>
      <h2>Experience</h2>
      <div className={styles.experience_container_content}>
        <article className={styles.experience_card}>
          <div className={styles.experience_card_content}>
            <div className={styles.experience_card_item}>
              <span className={styles.span_position}>Web Developer</span>
              <span className={styles.span_company}>prevalentWare</span>
              <span className={styles.span_type}>Full Time Remote</span>
              <span className={styles.span_time}>jun. 2024 - present</span>
            </div>
            <div className={styles.experience_card_item}>
              <span className={styles.span_position}>Frontend Developer</span>
              <span className={styles.span_company}>NOYSI</span>
              <span className={styles.span_type}>Full Time Remote</span>
              <span className={styles.span_time}>mar. 2024 - apr. 2024</span>
            </div>
            <div className={styles.experience_card_item}>
              <span className={styles.span_position}>Full Stack Developer</span>
              <span className={styles.span_company}>Whynot? mih</span>
              <span className={styles.span_type}>Full Time Remote</span>
              <span className={styles.span_time}>dec. 2023 - feb. 2024</span>
            </div>
            <div className={styles.experience_card_item}>
              <span className={styles.span_position}>Full Stack Developer</span>
              <span className={styles.span_company}>Rockdidit</span>
              <span className={styles.span_type}>Full Time Remote</span>
              <span className={styles.span_time}>jun. 2023 - dec. 2023</span>
            </div>
            <div className={styles.experience_card_item}>
              <span className={styles.span_position}>Frontend Developer</span>
              <span className={styles.span_company}>Chain The Barber</span>
              <span className={styles.span_type}>Part Time Remote</span>
              <span className={styles.span_time}>oct. 2022 - jun. 2023</span>
            </div>
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
