import { FC, ReactNode } from 'react'

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
type HedingLevels = 1 | 2 | 3 | 4

export interface IHeading {
  className?: string
  as: HeadingTags
  level: HedingLevels
  label?: string
  children?: ReactNode
}

const Heading: FC<IHeading> = ({ className, as, level, label, children }) => {
  const classNames = `heading-${ level } ${ className ? className : '' }`
  const content = label ? label : children

  switch (as) {
    case 'h1':
      return <h1 className={ classNames }>{ content }</h1>
    case 'h2':
      return <h2 className={ classNames }>{ content }</h2>
    case 'h3':
      return <h3 className={ classNames }>{ content }</h3>
    case 'h4':
      return <h4 className={ classNames }>{ content }</h4>
    case 'p':
      return <p className={ classNames }>{ content }</p>
    case 'span':
      return <span className={ classNames }>{ content }</span>
    case 'div':
      return <div className={ classNames }>{ content }</div>
    default:
      return <h2 className={ classNames }>{ content }</h2>
  }
}

export {
  Heading
}
