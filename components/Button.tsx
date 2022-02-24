import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

type ButtonVariants = 'primary' | 'white' | 'black' | 'icon' | 'text'
export interface IButton extends ComponentPropsWithoutRef<'button'> {
  as?: 'link'
  href?: string
  variant?: ButtonVariants
  size?: 'small' | 'medium' | 'large'
  label?: string
  onClick?: () => void
}

export default function Button({ className, as, href, variant, size, label, children, onClick }: IButton) {
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
    default:
      btnClasses.push('btn-primary')
      break;
  }

  switch (size) {
    case 'small':
      btnClasses.push('btn-small')
      break;
    case 'medium':
      btnClasses.push('btn-medium')
      break;
    case 'large':
      btnClasses.push('btn-large')
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
