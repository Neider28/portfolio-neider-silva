"use client"
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import rolls_royce from '@/assets/education/rolls-royce.png'
import { Icon } from '@iconify/react';
import styles from '@/css/Education.module.css'

export default function Education() {
  return (
    <section className={styles.education_container} id='education'>
      <h2>Education</h2>
      <div className={styles.education_container_content}>
        <article className={styles.education_card}>
          <div>
            <Icon icon="fa-solid:university" className={styles.education_icon} />
            <p>Systems Engineering at the Autonomous University of Bucaramanga.</p>
          </div>
        </article>
        <article className={styles.education_card}>
          <div>
            <Icon icon="zondicons:trophy" className={styles.education_icon} />
            <p>I have taken several programming courses at Platzi and Udemy.</p>
          </div>
        </article>
        <article className={styles.education_card}>
          <div>
            <Icon icon="fa6-solid:language" className={styles.education_icon} />
            <p>English level B1.</p>
          </div>
        </article>
      </div>
      <Fade direction='right'>
        <div className={styles.education_container_image}>
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
