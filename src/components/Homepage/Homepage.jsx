'use client'
import styles from './Homepage.module.scss'
import Navbar from '../Navbar/Navbar.jsx'

export default function Homepage() {
  return (
    <>
        <div className={styles.Main}>
            <Navbar/>
        </div>
    </>
  )
}
