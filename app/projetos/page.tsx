import type { Metadata } from 'next'
import Header from '../components/header'
import Link from 'next/link'

export const metadata : Metadata = {
  title: 'Portfólio - Projetos'
}

export default function Projetos() {
  return(
    <>
      <Header />

      <section className={`w-full h-screen px-56 max-lg:px-20 max-md:p-3 mb-20`}>
        <h1 className={`pt-24 font-semibold mb-10 text-center text-zinc-200 text-3xl`}>💻 Projetos Next.js e TailwindCss</h1>
      
        <div className={`flex justify-center items-center flex-wrap`}>
          <div className={`cursor-pointer hover:border-white duration-300 w-full max-w-[320px] h-auto border border-zinc-700 rounded m-5`}>
            <h3 className={`w-full h-52 flex border-b border-zinc-700 justify-center items-center text-zinc-200`}>IMAGE</h3>
            <div className={`p-3`}>
              <h2 className={`text-zinc-200 text-lg mb-2`}>PROJETO NEXT.JS</h2>
              <p className={`text-zinc-500 text-sm mb-5`}>DESCRIÇÃO DO PROJETO NEXT.JS</p>

                <div className={`flex justify-between items-center`}>
                  <Link className={`text-zinc-500 text-sm hover:underline hover:text-white`} href='/'>BY JACKSON VARGAS</Link>
                  <Link className={`text-zinc-500 text-sm hover:underline hover:text-white`} href='/'>DEPLOY</Link>
                </div>
              </div>
          </div>

          <div className={`cursor-pointer hover:border-white duration-300 w-full max-w-[320px] h-auto border border-zinc-700 rounded m-5`}>
            <h3 className={`w-full h-52 flex border-b border-zinc-700 justify-center items-center text-zinc-200`}>IMAGE</h3>
            <div className={`p-3`}>
              <h2 className={`text-zinc-200 text-lg mb-2`}>PROJETO NEXT.JS</h2>
              <p className={`text-zinc-500 text-sm mb-5`}>DESCRIÇÃO DO PROJETO NEXT.JS</p>

                <div className={`flex justify-between items-center`}>
                  <Link className={`text-zinc-500 text-sm hover:underline hover:text-white`} href='/'>BY JACKSON VARGAS</Link>
                  <Link className={`text-zinc-500 text-sm hover:underline hover:text-white`} href='/'>DEPLOY</Link>
                </div>
              </div>
          </div>

          <div className={`cursor-pointer hover:border-white duration-300 w-full max-w-[320px] h-auto border border-zinc-700 rounded m-5`}>
            <h3 className={`w-full h-52 flex border-b border-zinc-700 justify-center items-center text-zinc-200`}>IMAGE</h3>
            <div className={`p-3`}>
              <h2 className={`text-zinc-200 text-lg mb-2`}>PROJETO NEXT.JS</h2>
              <p className={`text-zinc-500 text-sm mb-5`}>DESCRIÇÃO DO PROJETO NEXT.JS</p>

                <div className={`flex justify-between items-center`}>
                  <Link className={`text-zinc-500 text-sm hover:underline hover:text-white`} href='/'>BY JACKSON VARGAS</Link>
                  <Link className={`text-zinc-500 text-sm hover:underline hover:text-white`} href='/'>DEPLOY</Link>
                </div>
              </div>
          </div>

          <div className={`cursor-pointer hover:border-white duration-300 w-full max-w-[320px] h-auto border border-zinc-700 rounded m-5`}>
            <h3 className={`w-full h-52 flex border-b border-zinc-700 justify-center items-center text-zinc-200`}>IMAGE</h3>
            <div className={`p-3`}>
              <h2 className={`text-zinc-200 text-lg mb-2`}>PROJETO NEXT.JS</h2>
              <p className={`text-zinc-500 text-sm mb-5`}>DESCRIÇÃO DO PROJETO NEXT.JS</p>

                <div className={`flex justify-between items-center`}>
                  <Link className={`text-zinc-500 text-sm hover:underline hover:text-white`} href='/'>BY JACKSON VARGAS</Link>
                  <Link className={`text-zinc-500 text-sm hover:underline hover:text-white`} href='/'>DEPLOY</Link>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}