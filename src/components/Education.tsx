"use client"
import Image from 'next/image'
import { Icon } from '@iconify/react';
import styles from '@/css/Education.module.css'

export default function Education() {
  return (
    <section className={styles.education_container}>
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
            <Icon icon="fa-solid:crown" className={styles.education_icon} />
            <p>I have taken several programming courses at Platzi.</p>
          </div>
        </article>
        <article className={styles.education_card}>
          <div>
            <Icon icon="fa6-solid:language" className={styles.education_icon} />
            <p>English level B1.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
