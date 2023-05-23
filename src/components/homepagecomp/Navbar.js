import {useEffect, useRef, useContext} from 'react'
import Link from 'next/link'
import styles from './scss/Navbar.module.scss'
import { HomeContext } from '@/contexts/HomeContext'
import { gsap }  from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
	const Navref = useRef()
	const { MainSec } = useContext(HomeContext)

	useEffect(() =>{
		const Links = Navref.current.querySelectorAll(`.${styles.links}`)
		const ctx = gsap.context(()=>{
			gsap.fromTo(Links,{ y: -100 },{ y: 0, stagger: 0.1})
		})
		return ()=> {
			ScrollTrigger.killAll()
			ctx.revert()
		}
	},[])


	useEffect(() =>{
		if(MainSec){
			
			const Links = MainSec.current.querySelectorAll(`.${styles.links}`)
			const About = MainSec.current.querySelector(`.AboutSection`)
			const Skill = MainSec.current.querySelector(`.SkillSection`)

			setTimeout(() =>{ ScrollTrigger.refresh() },500)

			const ctx = gsap.context(()=>{

				//on about
				const t1 = gsap.timeline({
					scrollTrigger:{
						trigger: About,
						start: 'top top',
						//pin: true,
						end: 'top',
						scrub: 1,
						//markers: true,
					}
				})
				t1.fromTo(Links,{ y:0 },{ y:-100 , stagger: -0.1, opacity: 0})

				//on skills
				const t2 = gsap.timeline({
					scrollTrigger:{
						trigger: Skill,
						start: '180% top',
						end: '250% top',
						scrub: 1,
						markers: true,
					}
				})
				t2.fromTo(Links,{ y:-100 },{ y: 0, delay:0.5, color: 'white',stagger: 0.1, opacity: 1})
				//.to(Links,{ y: -100, stagger: -0.1})
			})
			return ()=> {
				ScrollTrigger.killAll()
				ctx.revert()
			}
		}
	},[MainSec])

	return (
		<div className={styles.ul} ref={Navref}>

			<Link href='/' className={`${styles.links} ${styles.links0}`}>SOLO</Link>

			<div className={`${styles.links} ${styles.links1}`} >HOME</div>

			<div className={`${styles.links} ${styles.links2}`} >PROJECTS</div>

			<div className={`${styles.links} ${styles.links3}`} >CONTACT</div>

		</div>
	)
}
