import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CalltoAction from './components/CalltoAction'
import projects from './data/projects'
import Project from './components/Project'
import skills from './data/skill'
import Skill from './components/Skill'
import Footer from './components/Footer'
const page = () => {
  return (
    <main>
      <section>
        <Header />
        <Hero></Hero>
        <CalltoAction></CalltoAction>
      </section>
      <section id="projects" className='lg:text-left text-center'>
        <div className="container">
          <h2 className='mb-12'>Проекты</h2>
          {projects.map(project => <Project key={project.id} project={project} />)}
        </div>
      </section>
      <section id="skills">
        <div className="container lg:mb-12 mb-24">
          <h2 className='mb-12 lg:text-left text-center'>Навыки</h2>
          {skills.map(skill => <Skill key={skill.id} skill={skill} />)}
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default page