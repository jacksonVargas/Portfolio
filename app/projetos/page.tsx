import type { Metadata } from 'next'
import HeaderProjetos from '../components/headerProjetos'

export const metadata : Metadata = {
  title: 'Portfólio - Projetos'
}

export default function Projetos() {
  return(
    <>
      <HeaderProjetos />
    </>
  )
}