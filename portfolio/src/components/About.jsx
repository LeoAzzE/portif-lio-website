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
        description: "É uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web."
    },
    {
        id: uuidv4(),
        src: css,
        content: "CSS 3",
        description: "É onde se definem os estilos para projetos web."
    },
    {
        id: uuidv4(),
        src: js,
        content: "JavaScript",
        description: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma"
    },
    {
        id: uuidv4(),
        src: react,
        content: "ReactJS",
        description: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
    },
    {
        id: uuidv4(),
        src: java,
        content: "Java",
        description: "Java é uma linguagem back-end multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo."
    },
    {
        id: uuidv4(),
        src: python,
        content: "Python",
        description: "Python é uma linguagem de programação back-end de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte."
    },
    {
        id: uuidv4(),
        src: sql,
        content: "SQL",
        description: "É uma linguagem de programação utilizada para trabalhar com banco de dados relacionais."
    },
    {
        id: uuidv4(),
        src: git,
        content: "Git",
        description: "É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
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
                            Me chamo Leonardo Chaves, moro no RJ, sou graduado em Ciências contábeis, porém me encantei pela área da tecnologia
                            e venho estudando desenvolvimento web desde então, estou matriculado em uma universidade, realizando o curso de análise e desenvolvimento de sistemas, atualmente estou no 3° período, não consegui escolher entre back-end e front-end, então eu estudo um pouco dos dois. Criei essa page(com alguns conceitos básicos de reactJS) para mostrar alguns projetos que realizei, espero que gostem !
                        </blockquote>
                        <h5>Leonardo Chaves</h5>
                        <p>desenvolvedor web</p>
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