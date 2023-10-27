import Header from './components/header'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const metadata : Metadata = {
  title: 'Início'
}

export default function Home() {
  return (
    <>
      <Header />

      <section className={`w-full h-screen px-56 max-lg:px-20 max-md:p-3`}>
        <div className={`flex flex-col h-screen justify-center`}>
          <h1 className={`max-md:text-3xl text-5xl text-zinc-200 mb-3`}>Olá, meu nome é</h1>
          <h1 className={`max-md:text-4xl text-5xl text-zinc-200 mb-3`}>JACKSON <span className={`text-blue-600`}>VARGAS.</span></h1>
          <p className={`text-xl text-zinc-200 mb-8`}>Desenvolvedor Web Front-End</p>
          
          <div className={`flex flex-wrap items-center`}>
            <button className={`py-2 px-5 bg-blue-600 hover:bg-white hover:text-black text-white rounded`}><Link href='/projetos'>Veja Meus Projetos</Link></button>
            <button className={`py-2 ml-3 px-5 bg-blue-600 hover:bg-white hover:text-black text-white rounded`}><Link href='/sobre'>Sobre</Link></button>
          </div>
        </div>
      </section>
    </>
  )
}
