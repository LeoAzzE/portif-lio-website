import styles from './Project.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import React from "react";
import 'swiper/css'
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {Pagination, Navigation, FreeMode} from "swiper";
import list from '../assets/todo.png'
import pizzaria from '../assets/pizzaria.png'
import velha from '../assets/velha.png'
import feed from '../assets/feed.png'
import { v4 as uuidv4 } from 'uuid';



const data = [
    {
        name: 'Pizzaria',
        id: uuidv4(),
        description: 'Layout de um cardápio de uma pizzaria criado com HTML e CSS',
        src: pizzaria,
        deploy: 'https://pizzarialeoaz.netlify.app'
    },
    {
        name: 'lista de tarefas',
        id: uuidv4(),
        description: 'Lista de tarefas feita com conceitos básicos de ReactJS + Typescript',
        src: list,
        deploy: 'https://leoazze.github.io/vite-gh-pages/'
    },
    {
        name: 'Jogo da velha',
        id: uuidv4(),
        description: 'Jogo da velha realizado com HTML, CSS e JavaScript',
        src: velha,
        deploy: 'https://tictactoeleo.netlify.app'
    },
    {
        name: 'Feed de postagens',
        id: uuidv4(),
        description: 'Projeto criado com ReactJS e Typescript do curso da rocketseat',
        src: feed,
        deploy: 'https://leoazze.github.io/ignite-Feed-deploy/'
    },
]

export function Project() {
    return (
            <section id='project'>
                <div className={styles.title}>
                    <h1>Projetos</h1>
                </div>
            <Swiper
            grabCursor={true}
            navigation={true} modules={[Navigation, Pagination, FreeMode]} className="mySwiper"
            pagination={{clickable: true}}
            scrollbar={{ draggable: true }}
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
            <div className={styles.slideContainer}>
                
            </div>      
        {data.map(element => (          
            <SwiperSlide key={element.id}>
                            <div className={styles.slideContent}>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.card}>
                                        <div className={styles.imageContent}>
                                            <span className={styles.overlay}></span>
                                            <div className={styles.cardImage}>
                                                <img className={styles.cardImg} src={element.src} alt="cardImg" />
                                            </div>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h2 className={styles.name}>{element.name}</h2>
                                            <p className={styles.description}>{element.description}</p>
                                            <button className={styles.button}><a href={element.deploy} target="_blank">View More</a></button>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        
            </SwiperSlide>
        ))}
            </Swiper>
            </section>
    )
        
}
