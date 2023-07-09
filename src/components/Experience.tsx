"use client"
import Image from 'next/image'
import { Icon } from '@iconify/react';
import styles from '@/css/Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.experience_container}>
      <h2>Experience</h2>
      <div className={styles.experience_container_content}>
        <article className={styles.experience_card}>
          <div>
            <h3>Rock Did It</h3>
            <span>2023, May - Present</span>
            <span>Full Time Remote</span>
            <p>Back-end Web Developer</p>
          </div>
        </article>
      </div>
    </section>
  )
}
