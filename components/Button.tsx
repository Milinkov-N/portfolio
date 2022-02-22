import { ReactNode } from 'react'
export interface IButton {
  className?: string
  variant?: 'primary' | 'white' | 'black' | 'icon'
  label?: string
  children?: ReactNode
  onClick?: () => void
}

export default function Button({ className, variant, label, children, onClick }: IButton) {
  let isIcon = false
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
    case 'icon':
      btnClasses.push('btn-icon')
      isIcon = true
      break;
  }

  className && btnClasses.push(className)

  const TextNode = () => (
    <span>
      { children ? children : label }
    </span>
  )

  return (
    <button className={ btnClasses.join(' ') } onClick={ onClick }>
      { isIcon ? children : <TextNode /> }
    </button>
  )
}
