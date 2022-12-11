'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { close, logo, menu } from '../public/index'
import { navLinks } from '../constants/index'
import Link from 'next/link'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Image src={logo} alt="logo" width={124} height={32} />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu} alt={toggle ? "close" : "menu"}
          className="object-contain"
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index == navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar