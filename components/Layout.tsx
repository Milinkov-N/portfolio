import { ReactNode } from 'react'
import Header from './Header'

export interface ILayout {
  children?: ReactNode
}

export default function Layout({ children }: ILayout) {
  return (
    <div className='layout'>
      <Header />
      <main>
        { children }
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </div>
  )
}
