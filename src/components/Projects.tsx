"use client"
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import Project from './Project'
import projects from '../data/projects'
import styles from '@/css/Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.projects_container}>
      <h2>Projects</h2>
      <div className={styles.projects_container_content}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className={styles.swiper_container}
        >
          {
            projects.projects.map(item => 
              <SwiperSlide className={styles.swiper_slide} key={item.name}>
                <Project 
                  name={item.name}
                  description={item.description}
                  link={item.link}
                  repo={item.repo}
                  img={item.img}
                  skills={item.skills}
                  key={item.name}
                />
              </SwiperSlide>  
            )
          }
        </Swiper>
      </div>
    </section>
  )
}
