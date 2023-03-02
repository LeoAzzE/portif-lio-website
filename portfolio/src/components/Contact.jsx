import styles from './Contact.module.css'

export function Contact() {
    return(
        <section id='contact' className={styles.section}>
            <h2 className="animate__animated animate__jackInTheBox">Contato</h2>
            <p>Email: leochavesdev@gmail.com</p>
            <div>
                <h5>Feito por Leonardo Chaves</h5>
            </div>
        </section>
    )
}