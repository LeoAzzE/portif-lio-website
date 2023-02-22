import styles from './Header.module.css'
import 'animate.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h1 className="animate__animated animate__tada">LeoAzzE</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                        <a href="#">Projects</a>
                        <a href="#">About</a>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}