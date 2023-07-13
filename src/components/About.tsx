"use client"
import { Fade } from 'react-awesome-reveal'
import { Icon } from '@iconify/react'
import styles from '@/css/About.module.css'

export default function About() {
  return (
    <section className={styles.about_container} id='about'>
      <h2>About</h2>
      <div className={styles.about_container_content}>
        <p>
          In addition to being passionate about technology, I like to sing and write songs, I love music a lot. 
          My favorite musical genres are Rap, Hip Hop and Reggaeton. I really like that urban essence.
          I am passionate about cars, I really like sports cars and I would like to compete in circuit races. 
          I love to exercise, especially calisthenics.
        </p>
        <Fade direction='up'>
        <div className={styles.about_container_content_icons}>
          <div className={styles.icon_item}>
            <div>
              <Icon icon='mingcute:music-3-fill' />
            </div>
          </div>
          <div className={styles.icon_item}>
            <div>
              <Icon icon='ion:car-sport-sharp' />
            </div>
          </div>
          <div className={styles.icon_item}>
            <div>
              <Icon icon='material-symbols:exercise' />
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  )
}
