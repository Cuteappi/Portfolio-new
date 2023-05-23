import {useEffect, useContext} from 'react'
import Link from 'next/link'
import styles from './scss/Navbar.module.scss'
import { HomeContext } from '@/contexts/HomeContext'
import { TransitionContext } from '@/contexts/TransitionContext'
import { gsap }  from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {

	const { completed } = useContext(TransitionContext)
	const { MainSec } = useContext(HomeContext)

	// useEffect(() =>{
	// 	const Links = Navref.current.querySelectorAll(`.${styles.links}`)
	// 	const ctx = gsap.context(()=>{
	// 		gsap.to(Links,{ y: 0, stagger: 0.1})
	// 	})
	// 	return ()=> {
	// 		ScrollTrigger.killAll()
	// 		ctx.revert()
	// 	}
	// },[])


	useEffect(() =>{
		if (!completed) return
		if(MainSec){
			
			const Nav = MainSec.current.querySelector(`.Nav`)
			const Links = MainSec.current.querySelectorAll(`.Link`)
			const About = MainSec.current.querySelector(`.AboutSection`)
			const Skill = MainSec.current.querySelector(`.SkillSection`)

			const ctx = gsap.context(()=>{

				gsap.set(Nav,{ opacity: 1 })
				gsap.to(Links,{ y: 0, stagger: 0.1})

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
						//markers: true,
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
	},[completed])

	return (
		<div className={`${styles.ul} Nav`}>

			<Link href='/' className={`${styles.links} ${styles.links0} Link`}>SOLO</Link>

			<div className={`${styles.links} ${styles.links1} Link`} >HOME</div>

			<div className={`${styles.links} ${styles.links2} Link`} >PROJECTS</div>

			<div className={`${styles.links} ${styles.links3} Link`} >CONTACT</div>

		</div>
	)
}
