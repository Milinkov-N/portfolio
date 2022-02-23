import { ReactNode } from 'react'
import Header from './Header'

export interface ILayout {
  children?: ReactNode
}

export default function Layout({ children }: ILayout) {
  return (
    <div className='layout'>
      <Header />
      <main style={{ marginTop: '80px' }}>
        { children }
      </main>
    </div>
  )
}
