import classNames from 'classnames'
import React from 'react'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Warring = 'warring',
  Danger = 'danger',
  Link = 'link',
}

interface IButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: React.ReactNode
  href?: string
}

const Button: React.FC<IButtonProps> = (props) => {
  const { btnType, disabled: _disabled, size, children, href: _href } = props
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: _disabled,
  })
  return (
    <button className={classes} disabled={_disabled}>
      <span>{children}</span>
    </button>
  )
}
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}
export default Button
