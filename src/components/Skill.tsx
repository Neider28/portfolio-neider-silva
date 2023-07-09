"use client"
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import styles from '@/css/Skill.module.css'

interface Props {
  icon: string
  name: string
}

export default function Skill(props : Props) {
  return (
    <div className={styles.skill_container}>
      <Icon icon={props.icon} className={styles.skill_icon} />
      <p>{props.name}</p>
    </div>
  )
}
