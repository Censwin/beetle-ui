/*
 * @Author: Censwin
 * @Date: 2021-10-24 20:52:53
 * @LastEditTime: 2021-10-25 17:11:54
 * @Description:
 * @FilePath: /beetle-design/src/components/Button/button.tsx
 */
/*
 * @Author: Censwin
 * @Date: 2021-10-10 22:48:09
 * @LastEditTime: 2021-10-20 17:20:43
 * @Description:
 * @FilePath: /beetle-design/src/components/Button/button.tsx
 */
import classNames from 'classnames'
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

export type ButtonSize = 'lg' | 'sm' | 'medium'

export type ButtonType = 'primary' | 'default' | 'warning' | 'danger' | 'link'
interface IBaseButtonProps {
  className?: string
  /**
   * test
   */
  disabled?: boolean
  /**
   * test
   */
  size?: ButtonSize
  /**
   * test
   */
  btnType?: ButtonType
  /**
   * test
   */
  children?: React.ReactNode
  /**
   * test
   */
  href?: string
}
type NativeButtonAttr = IBaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type NativeAnchorAttr = IBaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonAttr & NativeAnchorAttr>

const Button: FC<ButtonProps> = (props) => {
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
    [`${userDefinedClassName}`]: userDefinedClassName,
  })
  console.log(classes)
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
  btnType: 'default',
  size: 'medium',
}
export default Button
