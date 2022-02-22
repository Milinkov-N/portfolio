import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export interface IPortal {
  children: ReactNode
  selector: string
}

export default function Portal({ children, selector }: IPortal) {
  let ref: any = useRef(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  })
  return mounted ? createPortal(children, ref.current) : null
}
