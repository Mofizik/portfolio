import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="container flex lg:flex-row flex-col-reverse justify-center items-center mb-48">
        <div className="lg:w-1/2 lg:text-left text-center">
            <div className='h-full pt-32'>
                <h1>Привет, меня зовут Илья</h1>
                <h3 className='mb-4'>Я - Web разработчик из Красноярска</h3>
                <div className="vertical-line" />
            </div>
            
        </div>
        <div className="h-full ">
          <img className='mb-16 portrait ' src="/images/portrait.png" alt="portrait" />
        </div>
    </div>
  )
}

export default Hero