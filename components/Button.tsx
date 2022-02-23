import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

type ButtonVariants = 'primary' | 'white' | 'black' | 'icon' | 'text'
export interface IButton extends ComponentPropsWithoutRef<'button'> {
  as?: 'link'
  href?: string
  variant?: ButtonVariants
  label?: string
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
    <Link href={ href ? href : '/' }>
      <a
        className={ btnClasses.join(' ') }
        onClick={ onClick }
      >
        { isIcon ? children : <TextNode /> }
      </a>
    </Link>
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
