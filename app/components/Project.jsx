'use client'
import {React, useRef} from 'react'
import { motion, useInView } from 'motion/react'
const Project = ({project}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  console.log(project)
  return (
    <>
    <div className='lg:flex block w-full gap-4 mb-10'>
      <motion.img whileHover={{translateX: -5, translateY: -5}}
      transition={{ type: "tween", duration: 0.2 }}
       className='lg:w-4/12 lg:mb-0 mb-4' src={project.image} />
      <motion.div
        ref={ref}
        initial={{ opacity: 0.5, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "tween", duration: 0.5 }}
       className='lg:w-8/12'>
        <h2>{project.title}</h2>
        <p className="subheader">{project.text}</p>
        <a className="project-button"href={project.link}>На сайт <img src="icons/link.svg"></img></a>
      </motion.div>
    </div>
    <hr className='mb-14'></hr>
    </>
  )
}

export default Project