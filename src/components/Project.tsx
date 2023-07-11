"use client"
import Image from 'next/image'
import { Icon } from '@iconify/react'
import styles from '@/css/Project.module.css'

interface Props {
  name: string
  description: string
  link: string
  repo: string
  img: string
  skills: Array<string>
}

export default function Project(props : Props) {
  const skills = props.skills.join(', ');

  return (
    <article className={styles.project_container}>
      <div className={styles.project_image}>
        <Image 
          src={props.img} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          alt='welcome' 
          fill 
          priority={true} 
        />
      </div>
      <div className={styles.project_content}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Tech Stack: {skills}</p>
      </div>
      <div className={styles.project_content_links}>
        <div>
          <a href={props.link} target='_blank'>
            <Icon icon="bx:link" className={styles.project_icon} />
          </a>
        </div>
        <div>
          <a href={props.repo} target='_blank'>
            <Icon icon="ri:github-fill" className={styles.project_icon} />
          </a>
        </div>
      </div>
    </article>
  )
}
