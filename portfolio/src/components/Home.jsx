import styles from './Home.module.css'
import linkedin from '../assets/linkedin.jpg'
import github from '../assets/github.png'
import avatar from '../assets/avatar.png'

export function Home() {
    return (
        <div>
            <div className={styles.circleMediaWrapper}>
                <div className={styles.circles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <span></span>
                </div>
            </div>
        <section id='home' className={styles.wrapperHome}>
            <div className={styles.circles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <span></span>
                </div>
            <div className={styles.texts}>
                <div className="animate__animated animate__backInDown animate__delay-1s">Olá, meu nome é</div>
                <span className="animate__animated animate__fadeInTopLeft animate__delay-1s">Leonardo Chaves</span>
                <div className="animate__animated animate__fadeInTopRight animate__delay-1s">Desenvolvedor web</div>
                <div>
                    <div className={styles.links}>
                    <a target="_blank" href="https://www.linkedin.com/in/leo-chaves-8a471122a/">
                        <div className={styles.linkedinLink}>
                            <img src={linkedin} alt="linkedin-icon" />
                            <div>Linkedin</div>
                        </div>
                    </a>
                    <a target="_blank" href="https://github.com/LeoAzzE">
                        <div className={styles.githubLink}>
                            <img src={github} alt="gitHub-icon" />
                            <div>Github</div>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
            <div className="animate__animated animate__pulse">
                <img className={styles.myimg} src={avatar} alt="avatarPhoto" />
            </div>
        </section>
        </div>
    )
}