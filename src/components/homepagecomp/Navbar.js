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
						//pin: true,
						end: 'top',
						scrub: 1
					}
				})
				t1.fromTo(Links,{ y:0 },{ y:-100 , stagger: -0.1, opacity: 0})

				//on skills
				const t2 = gsap.timeline({
					scrollTrigger:{
						trigger: Skill,
						start: '180% top',
						end: '250% top',
						scrub: 1
					}
				})
				t2.fromTo(Links,{ y:-100 },{ y: 0, delay:0.5, color: 'white',stagger: 0.1, opacity: 1})
				.fromTo(sp,{ background: 'white' },{ delay:0.5, background: 'white'})
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
			var limit = 2 * el.clientHeight + 11500

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
					gsap.to(el,{duration: 5, scrollTo: {y: limit}, ease:'power4.out'})
				})
				return ()=> ctx.revert()
			})

			
			icon.addEventListener('click', ()=>{
				if(window.innerWidth < 600){
					if(!setter){
						setter = 1
						icon.classList.add(`${styles.open}`)
						for (let i=0; i<Links.length; i++){Links[i].style.display = 'block'}
						gsap.to(Nav,{height:'20vh'})

					} else {
						setter = 0
						icon.classList.remove(`${styles.open}`)
						gsap.to(Nav,{height:'4vh'})
						setTimeout(()=>{for(let i=1; i<Links.length; i++){Links[i].style.display = 'none'}},500)
					}
				}
			})

			document.addEventListener('scroll', ()=>{
				if(window.innerWidth < 600){
					setter = 0
					icon.classList.remove(`${styles.open}`)
					gsap.to(Nav,{height:'4vh'})
					setTimeout(()=>{for(let i=1; i<Links.length; i++){Links[i].style.display = 'none'}},500)
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

			<div className={`${styles.links} ${styles.links2} Link`}>PROJECTS</div>

			<div className={`${styles.links} ${styles.links3} Link`}>CONTACT</div>

		</div>
	)
}
