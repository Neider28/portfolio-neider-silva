import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
    </main>
  )
}
