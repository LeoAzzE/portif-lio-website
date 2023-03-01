import styles from './Skill.module.css'


export function Skill(props) {
    return(
    <div className={styles.skillBox}>
    <div className={styles.skillTitle}>
        <div className={styles.image}>
            <img className={styles.skillIcon} src={props.skillSrc} alt="icon" />
        </div>
        <h3>{props.skillContent}</h3>
    </div>
        <p className={styles.description}>{props.skillDescription}</p>
</div>
    )
}