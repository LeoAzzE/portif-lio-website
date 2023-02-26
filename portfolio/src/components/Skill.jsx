import styles from './Skill.module.css'


export function Skill(props) {
    return(
    <div className={styles.skillBox}>
    <div className={styles.skillTitle}>
        <div className={styles.image}>
            <img className={styles.skillIcon} src={props.skillSrc} alt="" />
        </div>
        <h3>{props.skillContent}</h3>
    </div>
    <p>{props.skillDescription}</p>
</div>
    )
}