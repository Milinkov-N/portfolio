import { ReactNode } from 'react'

interface IButton {
  className?: string
  label?: string
  children?: ReactNode
}

export default function Button({ className, label, children }: IButton) {
  return (
    <div className={ `btn ${ className ? className : '' }` }>
      { children ? children : label }
    </div>
  )
}
