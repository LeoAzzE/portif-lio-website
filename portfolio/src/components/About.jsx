import styles from './About.module.css'
import photo from '../assets/myPhoto2.jpg'
import { Skill } from './Skill'
import { v4 as uuidv4 } from 'uuid';
import html from '../assets/html5.png'
import css from '../assets/css3.png'
import js from '../assets/js.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import git from '../assets/git.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'

const data = [
    {
        id: uuidv4(),
        src: html,
        content: "HTML 5",
        description: ""
    },
    {
        id: uuidv4(),
        src: css,
        content: "CSS 3",
        description: ""
    },
    {
        id: uuidv4(),
        src: js,
        content: "JavaScript",
        description: ""
    },
    {
        id: uuidv4(),
        src: react,
        content: "ReactJS",
        description: ""
    },
    {
        id: uuidv4(),
        src: java,
        content: "Java",
        description: ""
    },
    {
        id: uuidv4(),
        src: python,
        content: "Python",
        description: ""
    },
    {
        id: uuidv4(),
        src: sql,
        content: "SQL",
        description: ""
    },
    {
        id: uuidv4(),
        src: git,
        content: "Git",
        description: ""
    },
]



export function About() {
    return(
        <div>
            <section id='about' className={styles.wrapper}>
                <div className={styles.testimonial}>
                    <article>
                        <h1>Sobre mim</h1>
                        <img className={styles.img} src={photo} alt="photo"/>
                        <blockquote>
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt et quo non vero libero voluptas delectus tempora mollitia fugiat ea labore ducimus blanditiis officia quidem reiciendis, dignissimos fuga voluptate iste!"
                        </blockquote>
                        <h5>Leonardo Chaves</h5>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </article>
                    <section>
                        <div className={styles.inner}>
                            <div className={styles.title}>
                                <h1>Habilidades</h1>
                            </div>
                            <div className={styles.container}>
                                {data.map(element => (
                                    <Skill skillDescription={element.description} skillContent={element.content} skillSrc={element.src} key={element.id}/>
                                ))}                              
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </div>
    )
}