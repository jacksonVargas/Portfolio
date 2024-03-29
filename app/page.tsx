import Header from './components/header'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const metadata : Metadata = {
  title: 'Portfólio - Início'
}

export default function Home() {
  return (
    <>
      <Header />

      <section className={`w-full h-screen px-56 max-lg:px-20 max-md:p-3`}>
        <div className={`flex flex-col justify-center h-screen`}>
          <h1 className={`text-3xl text-zinc-200 mb-5`}>👨‍💻 JACKSON <span className={`text-blue-600`}>VARGAS</span></h1>
          <p className={`text-zinc-200 text-md`}>
            Olá, sou desenvolvedor web front-end há quatro anos. Trabalho com <Link href='https://nextjs.org/docs' target='_blank' className={`text-blue-600 `}>Next.js</Link> e <Link href='https://tailwindcss.com/docs/installation' target='_blank' className={`text-blue-600 `}>TailwindCss </Link> 
            para construir interfaces em versões desktop e mobile para deixar a experiência do usuário fluída 
            e de fácil usabilidade.
          </p>
            <br />
          <p className={`text-zinc-200 text-md`}>
            Este portfólio está sendo construido em <Link href='https://nextjs.org/docs' target='_blank' className={`text-blue-600 `}>Next.js</Link> e <Link href='https://tailwindcss.com/docs/installation' target='_blank' className={`text-blue-600 `}>TailwindCss</Link>, duas tecnologias que atenderam
            muito bem minhas necessidades na hora de construir layouts modernos e bonitos.
          </p>
            <br />
          <p className={`text-zinc-200 text-md mb-5`}>
            Aqui nesse portfólio você verá algumas skills que desenvolvi ao longo da minha jornada,
            e alguns projetos que fiz com <Link href='https://nextjs.org/docs' target='_blank' className={`text-blue-600 `}>Next.js</Link> e <Link href='https://tailwindcss.com/docs/installation' target='_blank' className={`text-blue-600 `}>TailwindCss </Link>.
          </p>

          <div className={`flex items-center`}>
            <button className={`py-2 px-5 bg-blue-600 hover:bg-white hover:text-black text-white rounded`}><Link href='/projetos'>Projetos</Link></button>
          </div>
        </div>
      </section>
    </>
  )
}
