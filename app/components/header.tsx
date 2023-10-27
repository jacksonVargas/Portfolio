'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()
  const [menu, setMenu] = useState(false)

  return(
    <>
      <header className={`w-full py-4 px-56 max-lg:px-20 max-md:p-3 bg-black border-b border-zinc-700 fixed`}>
        <div className={`flex justify-between items-center`}>
          <Link className={`text-2xl text-zinc-200 font-semibold`} href='/'>Port<span className={`text-blue-600`}>fólio</span></Link>

          <div className={`flex items-center`}>
            <Link className={`text-xl text-zinc-200 hover:text-blue-600`} href='https://github.com/jacksonVargas' target='_blank'><FaGithub /></Link>
            <Link className={`text-xl ml-5 text-zinc-200 hover:text-blue-600`} href='https://www.linkedin.com/in/jackson-vargas-29a486287/' target='_blank'><FaLinkedin /></Link>
          </div>
        </div>
      </header>
    </>
  )
}