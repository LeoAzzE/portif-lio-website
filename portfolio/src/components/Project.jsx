import styles from './Project.module.css'
import photo from '../assets/myPhoto2.jpg'
import avatar from '../assets/avatar.png'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const data = [
    {
        name: 'calculadora',
        id: 1,
        content: 'lorem',
        src: photo
    },
    {
        id: 2,
        name: 'Todo list',
        content: 'Projeto realizado em reactJS',
        src: photo
    },
]

export function Project() {
    return (
        <div>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Projetos</h1>
            </div>
            <div className={styles.projectArea}>
                
            </div>
        </div>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map(item =>{
            return(
            <SwiperSlide>
                <section className={styles.swiper}>

                </section>
            </SwiperSlide>
            )
        })}
      </Swiper>
      </div>
    )
        
}