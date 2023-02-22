import styles from './Project.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useRef, useState } from "react";
import 'swiper/css'
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {Pagination, Navigation, FreeMode} from "swiper";
import photo from '../assets/avatar.png'

const data = [
    {
        name: 'calculadora',
        id: 1,
        description: 'loremsdasadasdasdasdasdddddddddd',
        src: photo
    },
    {
        name: 'lista de tarefas',
        id: 2,
        description: 'loremsdasadasdasdasdasddddddddddd',
        src: photo
    },
    {
        name: 'lista de tarefas',
        id: 2,
        description: 'loremsdasadasdasdasdasddddddddddd',
        src: photo
    },
    {
        name: 'lista de tarefas',
        id: 2,
        description: 'loremsdasadasdasdasdasddddddddddd',
        src: photo
    },
]

export function Project() {
    return (
        <div>
            <div className={styles.title}>
                <h1>Projetos</h1>
            </div>
            <Swiper
            grabCursor={true}
            navigation={true} modules={[Navigation, Pagination, FreeMode]} className="mySwiper"
            pagination={{clickable: true}}
            slidesPerView={"auto"}
            freeMode={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                520: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                950: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                }
            }}
            >      
        {data.map(element => (          
            <SwiperSlide key={element.id}>
                                <div className={styles.slideContent}>
                                    <div className={styles.cardWrapper}>
                                        <div className={styles.card}>
                                            <div className={styles.imageContent}>
                                                <span className={styles.overlay}></span>

                                                <div className={styles.cardImage}>
                                                    <img className={styles.cardImg} src={photo} alt="" />
                                                </div>
                                            </div>

                                            <div className={styles.cardContent}>
                                                <h2 className={styles.name}>{element.name}</h2>
                                                <p className={styles.description}>{element.description}</p>
                                                <button className={styles.button}>View More</button>
                                            </div>
                                        </div>
                                    </div>                            
                        </div>
                        
            </SwiperSlide>
        ))}
            </Swiper>
            </div>
    )
        
}
