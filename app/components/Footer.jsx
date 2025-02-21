'use client'
import {React, useRef} from 'react'
import {motion, useInView} from 'motion/react'
const Footer = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <section className='relative'>
    <div className='container'>
        <div className="contact-block mb-4 p-4">
            <motion.h1 
            ref={ref} initial={{ opacity: 0, x: -100 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ type: "spring", duration: 0.5 }} className='lg:text-7xl md:text-5xl text-4xl lg:font-normal font-medium md:text-left text-center'>Готовы работать вместе?</motion.h1>
            <a href="mailto:ilyakatereniuk@gmail.com"><button className='button primary'>связаться</button></a>
        </div>
        <div className="mb-7">
            <p className="subheader text-center">Контакты</p>
            <div className="flex justify-center gap-12">
            <a href="https://t.me/Mofizik" target='_blank'><img src="icons/telegram.svg"></img></a>
            <a href="mailto:ilyakatereniuk@gmail.com"><img src="icons/email.svg"></img></a>
            <a href="https://github.com/Mofizik" target='_blank'><img src="icons/github.svg"></img></a>
            </div>
        </div>
    </div>
    <div className='footer-line'></div>
    </section>
  )
}

export default Footer