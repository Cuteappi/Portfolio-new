import styles from './scss/projects.module.scss'

export default function Projects() {
    return (
        <section className={styles.projects}>
            <h1 className={styles.projects__title}>Projects</h1>
            <div className={styles.projects__1} >
                <img src='/images/portfolio.png' className={styles.projects__1__img}/>
                <h1>Personal Portfolio</h1>
            </div>

            <div className={styles.projects__2}>
                <img src='/images/foodOrderingSystem.png' className={styles.projects__2__img}/>
                <h1>Online food ordering system</h1>
            </div> 
        </section>
    )
}
