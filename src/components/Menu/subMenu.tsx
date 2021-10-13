import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { IMenuItemProps } from './menuItem'
export interface ISubMenuProps {
  index?: number | string
  title: string
  className?: string
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const { index: _indexFromMenu, onSelect } = useContext(MenuContext)
  const classes = classNames('menu-item menu-sub-item', className, {
    'menu-item-active': index === _indexFromMenu,
  })
  const renderChildren = () => {
    const childComponent = React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index,
        })
      } else {
        console.error('Warning: The element is not MenuItem')
      }
    })
    return <ul className="sub-menu-item-wrapper">{childComponent}</ul>
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
