import { ReactNode } from 'react'
import Footer from './Footer'
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
      </main>
      <Footer />
    </div>
  )
}
