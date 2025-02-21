'use client'
import { React, useRef }from 'react'
import {motion, useInView} from "motion/react"
const Skill = ({skill}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  console.log(skill)
  const cN = skill.id % 2 === 0 ? 'flex lg:gap-24 mb-12 lg:flex-row flex-col-reverse' : 'flex lg:gap-24 mb-12 lg:flex-row-reverse flex-col-reverse'
  return (
    <>
    <div className= {cN}>
      <img className='lg:w-4/12 lg:h-60 object-contain' src={skill.image} />
      <motion.div 
        ref={ref}
        initial={{ opacity: 0.5, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "tween", duration: 0.5 }}
        className='lg:w-7/12 flex flex-col justify-center'>
        <h3>{skill.title}</h3>
        <p className="subheader">{skill.text}</p>
      </motion.div>
    </div>
    </>
  )
}

export default Skill