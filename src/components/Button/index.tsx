import React from 'react'
import * as Styled from './styled'

interface IProps {
  disabled?: boolean
  variant?: 'contained' | 'filled'
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
  size?: 'small' | 'medium' | 'big' | 'large'
  value: string
  onClick?: () => void
}
export const Button: React.FC<IProps> = ({
  disabled,
  size,
  variant,
  color,
  value,
  onClick
}) => {
  return (
    <Styled.Btn
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      colorBtn={color}
      size={size}
    >
      {value}
    </Styled.Btn>
  )
}
