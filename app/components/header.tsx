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

          <ul className={`flex items-center max-md:hidden`}>
            <Link className={`ml-5 hover:text-blue-600 link ${pathname === '/' ? 'text-blue-600' : 'text-zinc-200'}`} href='/'>Inicío</Link>
            <Link className={`ml-5 hover:text-blue-600 link ${pathname === '/sobre' ? 'text-blue-600' : 'text-zinc-200'}`} href='/sobre'>Sobre</Link>
            <Link className={`ml-5 hover:text-blue-600 link ${pathname === '/habilidades' ? 'text-blue-600' : 'text-zinc-200'}`} href='/habilidades'>Habilidades</Link>
            <Link className={`ml-5 hover:text-blue-600 link ${pathname === '/projetos' ? 'text-blue-600' : 'text-zinc-200'}`} href='/projetos'>Projetos</Link>
            <Link className={`ml-5 hover:text-blue-600 link ${pathname === '/contato' ? 'text-blue-600' : 'text-zinc-200'}`} href='/contato'>Contato</Link>
          </ul>

          <div className={`flex items-center max-md:hidden`}>
            <Link className={`text-xl text-zinc-200 hover:text-blue-600`} href='https://github.com/jacksonVargas' target='_blank'><FaGithub /></Link>
            <Link className={`text-xl ml-5 text-zinc-200 hover:text-blue-600`} href='https://www.linkedin.com/in/jackson-vargas-29a486287/' target='_blank'><FaLinkedin /></Link>
          </div>

        { /*MOBILE*/ }
          <ul className={`${menu ? 'max-w-[280px]' : 'hidden'} w-full flex flex-col md:hidden fixed top-0 left-0 h-screen bg-black border-r border-zinc-200`}>
            <Link className={`m-5 ml-3 hover:text-blue-600 link ${pathname === '/' ? 'text-blue-600' : 'text-zinc-200'}`} href='/'>Inicío</Link>
            <Link className={`mb-5 ml-3 hover:text-blue-600 link ${pathname === '/sobre' ? 'text-blue-600' : 'text-zinc-200'}`} href='/sobre'>Sobre</Link>
            <Link className={`mb-5 ml-3 hover:text-blue-600 link ${pathname === '/habilidades' ? 'text-blue-600' : 'text-zinc-200'}`} href='/habilidades'>Habilidades</Link>
            <Link className={`mb-5 ml-3 hover:text-blue-600 link ${pathname === '/projetos' ? 'text-blue-600' : 'text-zinc-200'}`} href='/projetos'>Projetos</Link>
            <Link className={`mb-5 ml-3 hover:text-blue-600 link ${pathname === '/contato' ? 'text-blue-600' : 'text-zinc-200'}`} href='/contato'>Contato</Link>
          
            <div className={`flex items-center absolute bottom-10 left-5`}>
              <Link className={`text-xl text-zinc-200 hover:text-blue-600`} href='https://github.com/jacksonVargas' target='_blank'><FaGithub /></Link>
              <Link className={`text-xl ml-5 text-zinc-200 hover:text-blue-600`} href='https://www.linkedin.com/in/jackson-vargas-29a486287/' target='_blank'><FaLinkedin /></Link>
            </div>
          </ul>

          <button className={`md:hidden text-2xl text-zinc-200 hover:text-blue-600`} onClick={() => setMenu(!menu)}>
            {menu ? <FaTimes /> : <FaBars />}
          </button>
        { /*MOBILE*/ }
        </div>
      </header>
    </>
  )
}