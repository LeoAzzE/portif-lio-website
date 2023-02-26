import styles from './Contact.module.css'

export function Contact() {
    return(
        <section id='contact' className={styles.section}>
            <h2 className="animate__animated animate__jackInTheBox">Contato</h2>
            <p>Email: leochavesdev@gmail.com</p>
            <p>Phone: (21) 98864-7619</p>
        </section>
    )
}