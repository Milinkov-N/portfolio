import { ComponentPropsWithoutRef, FC } from 'react'

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
type HedingLevels = 1 | 2 | 3 | 4

export interface IHeading extends ComponentPropsWithoutRef<any> {
  as: HeadingTags
  level: HedingLevels
  label?: string
}

const Heading: FC<IHeading> = ({ className, as: Component = 'h2', level, label, children }) => {
  const classNames = `heading-${ level } ${ className ? className : '' }`
  const content = label ? label : children

  return <Component className={ classNames }>{ content }</Component>
}

export {
  Heading
}
