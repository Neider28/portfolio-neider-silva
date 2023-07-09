"use client"
import Image from 'next/image'
import { Icon } from '@iconify/react'
import skills from '../data/skills'
import Skill from './Skill'
import styles from '@/css/Skills.module.css'

export default function Skills() {
  return (
    <section className={styles.skills_container}>
      <h2>Skills</h2>
      <div className={styles.skills_container_content}>
        <article className={styles.skills_card}>
          <div>
            <h3>Front-end</h3>
            <div className={styles.skills_list}>
              {
                skills.frontend.map(item => 
                  <Skill icon={item.icon} name={item.name} key={item.name} />  
                )
              }
            </div>
          </div>
        </article>
        <article className={styles.skills_card}>
          <div>
            <h3>Back-end</h3>
            <div className={styles.skills_list}>
              {
                skills.backend.map(item => 
                  <Skill icon={item.icon} name={item.name} key={item.name} />  
                )
              }
            </div>
          </div>
        </article>
        <article className={styles.skills_card}>
          <div>
            <h3>Tools and more</h3>
            <div className={styles.skills_list}>
              {
                skills.tools.map(item => 
                  <Skill icon={item.icon} name={item.name} key={item.name} />  
                )
              }
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
