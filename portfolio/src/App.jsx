import { Header } from './components/Header'
import './global.css';
import styles from './App.module.css'
import {  Home  } from './components/Home'
import { Project } from './components/Project'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

export function App() {
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <div >
            <Header />
            <div data-aos="zoom-in">
                <Home />           
            </div>
            <div data-aos="flip-left" className={styles.slideContainer}>
                <Project />
            </div>
            <span data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
                <About />
            </span>
            <Contact />                
        </div>

    )
}

