import styles from './scss/projects.module.scss'
import { useEffect, useContext, useRef } from 'react'
import { HomeContext } from '@/contexts/HomeContext'

export default function Projects() {
    const { setProject } = useContext(HomeContext)
    const Projectref = useRef()

    useEffect(() =>{
        setProject(Projectref)
    },[])

    return (
        <section className={styles.projects} ref={Projectref}>
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
