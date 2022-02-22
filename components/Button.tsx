import { ReactNode } from 'react'
export interface IButton {
  className?: string
  variant?: 'primary' | 'white' | 'black'
  label?: string
  children?: ReactNode
}

export default function Button({ className, variant, label, children }: IButton) {
  const btnClasses = ['btn']

  switch(variant) {
    case 'primary':
      btnClasses.push('btn-primary')
      break;
    case 'white':
      btnClasses.push('btn-white')
      break;
    case 'black':
      btnClasses.push('btn-black')
      break;
  }

  className && btnClasses.push(className)

  return (
    <button className={ btnClasses.join(' ') }>
      <span>
        { children ? children : label }
      </span>
    </button>
  )
}
