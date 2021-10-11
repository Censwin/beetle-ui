/*
 * @Author: Censwin
 * @Date: 2021-10-10 22:48:09
 * @LastEditTime: 2021-10-11 14:44:24
 * @Description:
 * @FilePath: /whale-design/src/components/Button/button.tsx
 */
import classNames from 'classnames'
import * as React from 'react'

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

interface IBaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: React.ReactNode
  href?: string
}
type NativeButtonAttr = IBaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>
type NativeAnchorAttr = IBaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonAttr & NativeAnchorAttr>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled: _disabled,
    size,
    children,
    href: _href,
    className: userDefinedClassName,
    ...NativeAttr
  } = props
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: _disabled,
    userDefinedClassName,
  })

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick, disabled } = props
    if (disabled) {
      e.preventDefault()
      return
    }
    ;(
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e)
  }

  if (_href) {
    return (
      <a href={_href} className={classes} {...NativeAttr} onClick={handleClick}>
        {children}
      </a>
    )
  }
  return (
    <button
      className={classes}
      disabled={_disabled}
      {...NativeAttr}
      onClick={handleClick}
    >
      <span>{children}</span>
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}
export default Button