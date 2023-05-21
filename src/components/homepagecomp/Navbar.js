import {useEffect, useRef, useContext} from 'react'
import Link from 'next/link'
import styles from './scss/Navbar.module.scss'
import { HomeContext } from '@/contexts/HomeContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
	const { About } = useContext(HomeContext)
	const { Skill } = useContext(HomeContext)
	const Navref =  useRef()

	useEffect(() =>{
		gsap.fromTo(Navref.current.children,{ y:-100 },{ y: 0, delay:0.5, stagger: 0.1 })
	},[])

	useEffect(() =>{
		if(About){
			setTimeout(() =>{
				const t1 = gsap.timeline({
					scrollTrigger:{
						trigger: About.current,
						start: 'top top',
						end: 'top top',
						scrub: 1
					}
				})
				t1.fromTo(Navref.current.children,{ y:0 },{ y:-100 , stagger: -0.1 })
			},500)
		}
	},[About])

	useEffect(() =>{
		if(Skill){
			setTimeout(() =>{
				const t1 = gsap.timeline({
					scrollTrigger:{
						trigger: Skill.current,
						start: 'top top',
						end: 'top top',
						scrub: 1
					}
				})
				t1.fromTo(Navref.current.children,{ y:-100 },{ y: 0, delay:0.5, color: 'white',stagger: 0.1 })
			},500)
		}
	},[Skill])
	return (
		<div className={styles.ul} ref={Navref}>

			<Link href='/' className={`${styles.links} ${styles.links0}`}>SOLO</Link>

			<div className={`${styles.links} ${styles.links1}`} >HOME</div>

			<div className={`${styles.links} ${styles.links2}`} >PROJECTS</div>

			<div className={`${styles.links} ${styles.links3}`} >CONTACT</div>

		</div>
	)
}
