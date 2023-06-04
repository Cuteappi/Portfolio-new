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

	useEffect(() =>{
		if (!completed) return
		if(MainSec){
			
			const Nav = MainSec.current.querySelector(`.Nav`)
			const Links = MainSec.current.querySelectorAll(`.Link`)
			const About = MainSec.current.querySelector(`.AboutSection`)
			const Skill = MainSec.current.querySelector(`.SkillSection`)
			const sp = MainSec.current.querySelectorAll('.sp')

			const ctx = gsap.context(()=>{

				gsap.set(Nav,{ opacity: 1 })
				gsap.to(Links,{ y: 0, stagger: 0.1, delay: 0.5})

				//on about
				const t1 = gsap.timeline({
					scrollTrigger:{
						trigger: About,
						start: 'top top',
						end: 'bottom top',
						scrub: 1,
						fastScrollEnd: true
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
						fastScrollEnd: true					
					}
				})
				t2.fromTo(Links,{ y:-100 },{ y: 0, delay:0.5, color: 'white',stagger: 0.1, opacity: 1})
				.fromTo(sp,{ background: 'black' },{ delay:0.5, background: 'white'})
			})
			return ()=> {
				ScrollTrigger.killAll()
				ctx.revert()
			}
		}
	},[completed])

	useEffect(()=>{
		if(MainSec){
			const el = document.documentElement
			const Links = MainSec.current.querySelectorAll('.Link')
			const icon = MainSec.current.querySelector('.icon')
			const Nav = MainSec.current.querySelector(`.Nav`)

			var setter = 0
			var scrolling = false
			var limit = 3 * el.clientHeight + 10500

			//HOME
			Links[1].addEventListener('click', ()=>{
				const ctx = gsap.context(()=>{
					gsap.to(el,{duration: 2, scrollTo: {y: 0}, ease:'power4.out'})
				})
				return ()=> ctx.revert()
			})

			//skills
			Links[2].addEventListener('click', ()=>{
				const ctx = gsap.context(()=>{
					gsap.to(el,{duration: 2, scrollTo: {y: 4700}, ease:'power4.out'})
				})
				return ()=> ctx.revert()
			})

			//projects
			Links[3].addEventListener('click', ()=>{
				const ctx = gsap.context(()=>{
					gsap.to(el,{duration: 2, scrollTo: {y: 8400}, ease:'power4.out'})
				})
				return ()=> ctx.revert()
			})

			//contact
			Links[4].addEventListener('click', ()=>{
				const ctx = gsap.context(()=>{
					gsap.to(el,{duration: 5, scrollTo: {y: limit + 500}, ease:'power4.out'})
				})
				return ()=> ctx.revert()
			})

			
			icon.addEventListener('click', ()=>{
				if(window.innerWidth < 600){
					if(scrolling) return
					if(!setter){
						setter = 1
						icon.classList.add(`${styles.open}`)
						for (let i=1; i<Links.length; i++){Links[i].style.display = 'block'}
						const ctx = gsap.context(()=>{
							const t1 = gsap.timeline()
							t1.to(Nav,{height:'20vh', backdropFilter: 'blur(8px)'})
						})
						return ()=> ctx.revert()

					} else {
						setter = 0
						icon.classList.remove(`${styles.open}`)
						const ctx = gsap.context(()=>{
							const t1 = gsap.timeline()
							t1.to(Nav,{height:'6vh'})
						})
						setTimeout(()=>{
							for (let i=1; i<Links.length; i++){Links[i].style.display = 'none'}
							Nav.style.backdropFilter = 'blur(0px)'
						},500)
						return ()=> ctx.revert()
					}
				}
			})

			document.addEventListener('scroll', ()=>{
				if(window.innerWidth < 600){
					setter = 0
					scrolling = true
					icon.classList.remove(`${styles.open}`)
					const ctx = gsap.context(()=>{
						const t1 = gsap.timeline()
						t1.to(Nav,{height:'6vh'})
					})
					setTimeout(()=>{
						for (let i=1; i<Links.length; i++){Links[i].style.display = 'none'}
						Nav.style.backdropFilter = 'blur(0px)'
					},500)
					scrolling = false
					return ()=> ctx.revert()
				}
			})
		}else{ return }
	},[MainSec])

	return (
		<div className={`${styles.ul} Nav`}>

			<Link href='/' className={`${styles.links} ${styles.links0} Link`}>SOLO</Link>
			
			<div className={`${styles.nav_icon2} icon`}>
				<span className='sp'></span>
				<span className='sp'></span>
				<span className='sp'></span>
				<span className='sp'></span>
				<span className='sp'></span>
				<span className='sp'></span>
			</div>

			<div className={`${styles.links} ${styles.links1} Link`}>HOME</div>

			<div className={`${styles.links} ${styles.links2} Link`}>SKILLS</div>

			<div className={`${styles.links} ${styles.links3} Link`}>PROJECTS</div>

			<div className={`${styles.links} ${styles.links4} Link`}>CONTACT</div>

		</div>
	)
}
