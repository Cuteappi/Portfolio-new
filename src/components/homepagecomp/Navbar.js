import React from 'react'
import Link from 'next/link'
import styles from './scss/Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.ul}>

        <Link href='/' className={`${styles.links} ${styles.links0}`}>SOLO</Link>

        <div className={`${styles.links} ${styles.links1}`} >HOME</div>

        <div className={`${styles.links} ${styles.links2}`} >PROJECTS</div>

        <div className={`${styles.links} ${styles.links3}`} >CONTACT</div>

    </div>
  )
}
