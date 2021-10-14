import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface IMenuItemProps {
  index?: string | number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { index, disabled, className: _className, style, children } = props
  const { index: _indexFromMenu, onSelect } = useContext(MenuContext)
  const classes = classNames('menu-item', _className, {
    'is-disabled': disabled,
    'menu-item-active': index === _indexFromMenu,
  })
  const handleClick = () => {
    if (onSelect && !disabled) onSelect(index)
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
MenuItem.displayName = 'MenuItem'

export default MenuItem
