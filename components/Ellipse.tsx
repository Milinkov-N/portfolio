import React from 'react'

export interface IEllipse {
  className?: string
  color: 'primary' | 'secondary' | 'violet' | 'blue'
}

export default function Ellipse({ className, color = 'primary' }: IEllipse) {
  let cssVariable: string

  switch (color) {
    case 'primary':
      cssVariable = 'primary-clr-100'
      break;
    case 'secondary':
      cssVariable = 'secondary-clr-100'
      break;
    case 'violet':
      cssVariable = 'accent-violet-clr-100'
      break;
    case 'blue':
      cssVariable = 'accent-blue-clr-100'
      break;
    default:
      cssVariable = 'primary-clr-100'
      break;
  }

  return (
    <div className={ `ellipse ${ className ? className : '' }` } style={{ background: `var(--${ cssVariable })` }} />
  )
}
