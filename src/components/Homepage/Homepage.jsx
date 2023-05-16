'use client'
import styles from './Homepage.module.scss'
import Navbar from '../Navbar/Navbar.jsx'

export default function Homepage() {
  return (
    <>
        <div className={styles.Main}>
            <Navbar/>
            <div className={styles.contact_icons}>

            </div>
            <section className={styles.about_section}>
                <div className={styles.name}>
                    <h1>Hello,</h1>
                    <h1>my name is Solomon</h1>
                    <div className={styles.about_me}>
                        <span className={styles.span}>I am a full Stack Developer focused on</span>
                        <span className={styles.span}>creating beautiful web designs</span>
                    </div>
                </div>                
            </section>
            <section className={styles.projects}>
                <div className={styles.projects_part}>hello</div>
            </section>
        </div>
    </>
  )
}
