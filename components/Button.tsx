import { ReactNode } from 'react'

type Variants = 'primary' | 'white' | 'black' | 'icon' | 'text'
export interface IButton {
  className?: string
  as?: 'link'
  href?: string
  variant?: Variants
  label?: string
  children?: ReactNode
  onClick?: () => void
}

export default function Button({ className, as, href, variant, label, children, onClick }: IButton) {
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
    case 'text':
      btnClasses.push('btn-text')
      break;
  }

  className && btnClasses.push(className)

  const TextNode = () => (
    <span>
      { children ? children : label }
    </span>
  )

  const AsLink = () => (
    <a
      className={ btnClasses.join(' ') }
      onClick={ onClick }
      href={ href }
    >
      { isIcon ? children : <TextNode /> }
    </a>
  )

  const AsButton = () => (
    <button
      className={ btnClasses.join(' ') }
      onClick={ onClick }
    >
      { isIcon ? children : <TextNode /> }
    </button>
  )

  return as === 'link' ? <AsLink /> : <AsButton />
}
