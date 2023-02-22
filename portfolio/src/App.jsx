import { Header } from './components/Header'
import './global.css';
import {  Home  } from './components/Home'
import { Project } from './components/Project'


export function App() {
    return(
        <div>
            <Header />
            <Home />
            <Project />
        </div>    
    )
}

