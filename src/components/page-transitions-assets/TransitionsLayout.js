'use client'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { TransitionContext } from '@/contexts/TransitionContext'
import { SwitchTransition, Transition } from 'react-transition-group'
import gsap from 'gsap'

export default function TransitionLayout ({ children }){
    const router = useRouter()
    useEffect(()=>{
        router.beforePopState((state) => {
            state.options.scroll = false;
            return true;
        });
    })

    const {setCompleted} = useContext(TransitionContext)

    //const stateEnter = (element) => {gsap.fromTo(element, states.Enter[0], states.Enter[1])}
    //const stateExit = (element) => {gsap.fromTo(element, states.Exit[0], states.Exit[1])}

    var onPageEnter = (element) => {
        setCompleted(false)

        gsap.set(element,{
            y: 50,
            autoAlpha: 0,
            ease: 'power3.out'
        })

        const t1 = gsap.timeline({
            paused: true,
            onComplete:()=>{
                gsap.set(element, { clearProps: 'all' });
                setCompleted(true);
            }
        })
        t1.to(element,{
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: 'power3.out',
        }).play()     
    }

    var onPageExit = (element) => {
        setCompleted(false)
        gsap.set(element,{
            y: 0,
            autoAlpha: 1,
            ease: 'power3.out',
        })

        const tl = gsap.timeline({
            paused: true
        })

        tl.to(element,{
            y: -50,
            autoAlpha: 0,
            duration: 0.5,
            ease: 'power3.inOut',
        }).play() 
    }
    
    //states.Enter ? stateExit : onPageExit
    //states.Enter ? stateEnter : onPageEnter
    return (
        <>
            <SwitchTransition>
                <Transition
                    key={router.pathname}
                    timeout={500}
                    in={true}
                    onEnter={onPageEnter}
                    onExit={onPageExit}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    {children}
                </Transition>
            </SwitchTransition>
        </>
    )
}

