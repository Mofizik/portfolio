'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const Header = () => {
  const [mobile, setMobile] = useState(false)
  const menuRef = useRef(null)

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobile(false)
      }
    }

    if (mobile) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobile])

  return (
    <div className="container mt-4 header mb-14 relative">
      <div className="md:flex hidden justify-between w-full">
        <ul className='flex list-none gap-5'>
          <li><a href="#">Главная</a></li>
          <li><a href="#projects">Проекты</a></li>
          <li><a href="#skills">Навыки</a></li>
        </ul>
        <a href="mailto:ilyakatereniuk@gmail.com">
          <div className="flex gap-1">
            <Image src="icons/message.svg" alt="message" width={32} height={32} />
            <span className='uppercase'>связаться</span>
          </div>
        </a>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between w-full">
        <a href="mailto:ilyakatereniuk@gmail.com">
          <div className="flex gap-1">
            <span className='uppercase'>связаться</span>
          </div>
        </a>
        <button onClick={() => setMobile(true)}>
          <img src="icons/more.svg" alt="more" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={menuRef} 
        className={`w-8/12 fixed top-0 right-0 h-full bg-[#19192b] shadow-lg p-6 transition-transform duration-300 ease-in-out ${mobile ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 100 }}
      >
        <img 
          className="absolute top-4 right-4 w-12 cursor-pointer" 
          src="icons/close1.svg" 
          alt="close" 
          onClick={() => setMobile(false)} 
        />
        <ul className='list-none gap-5'>
          <li><a href="#">Главная</a></li>
          <li><a href="#projects">Проекты</a></li>
          <li><a href="#skills">Навыки</a></li>
        </ul>
        <div className="absolute bottom-4 left-0 flex justify-center gap-12">
          <a href="https://t.me/Mofizik" target='_blank'><img src="icons/telegram.svg" alt="telegram" /></a>
          <a href="mailto:ilyakatereniuk@gmail.com"><img src="icons/email.svg" alt="email" /></a>
          <a href="https://github.com/Mofizik" target='_blank'><img src="icons/github.svg" alt="github" /></a>
        </div>
      </div>
    </div>
  )
}

export default Header
