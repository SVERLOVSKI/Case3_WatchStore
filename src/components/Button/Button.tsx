import React, { Children } from 'react'
import type { ReactNode } from 'react'

interface ButtonProps {
  children:ReactNode, 
  className:string, 
  onClick: () => void
}

const Button:React.FC<ButtonProps> = ({children, className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default Button