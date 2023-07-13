"use client"
import { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(!load);
    }, 3000);
  }, []);

  return (
    <>
      {!load ? (<Loading />) : (
        <main className={styles.main}>
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>)
      }
    </>
  )
}
