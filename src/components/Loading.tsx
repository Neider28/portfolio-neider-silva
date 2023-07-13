"use client"
import Image from 'next/image'
import logo from '@/public/logo.png'
import styles from '@/css/Loading.module.css'

export default function Loading() {
  return (
    <section className={styles.loading_container}>
      <div className={styles.loader}>
        <div className={styles.loader_image}>
          <Image 
            src={logo} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            alt='welcome' 
            fill 
            priority={true} 
          />
        </div>
      </div>
      <div className={styles.lds_ellipsis}>
        <div></div><div></div><div></div><div></div>
      </div>
    </section>
  )
}
