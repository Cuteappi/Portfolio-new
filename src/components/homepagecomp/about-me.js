import React from 'react'
import styles from './scss/about.module.scss'

export default function aboutMe() {
    return (
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
    )
}
