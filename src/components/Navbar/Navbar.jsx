import Link from 'next/link'
import styles from'./Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.ul}>

        <Link href='/' className={`${styles.links} ${styles.links0}`} >SOLOMON RAJKUMAR</Link>

        <Link href='/home' className={`${styles.links} ${styles.links1}`} >HOME</Link>

        <Link href='/projects' className={`${styles.links} ${styles.links2}`} >PROJECTS</Link>

        <Link href='/CONTACT' className={`${styles.links} ${styles.links3}`} >CONTACT</Link>

    </div>
  )
}
