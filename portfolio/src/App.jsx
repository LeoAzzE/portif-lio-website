import { Header } from './components/Header'
import './global.css';
import styles from './App.module.css'
import {  Home  } from './components/Home'
import { Project } from './components/Project'

export function App() {
    return(
        <div>
            <Header />
            <Home />
            <div className={styles.slideContainer}>
                <Project />
            </div>
        </div>    
    )
}

