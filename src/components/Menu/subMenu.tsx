import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { IMenuItemProps } from './menuItem'
import Icon from '../Icon/icon'
import { CSSTransition } from 'react-transition-group'
export interface ISubMenuProps {
  index?: string
  title: string
  className?: string
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const {
    index: _indexFromMenu,
    onSelect,
    mode,
    defaultOpen,
  } = useContext(MenuContext)
  const isOpen =
    index && mode === 'vertical' ? defaultOpen.includes(index) : false
  const [showSubMenu, setShowSubMenu] = useState(isOpen)
  const formatIndex = _indexFromMenu.substr(0, _indexFromMenu.indexOf('-'))
  console.log(formatIndex)
  const classes = classNames('menu-item menu-sub-item', className, {
    'menu-item-active': index === formatIndex,
    'is-opened': showSubMenu,
    'is-vertical': mode === 'vertical',
  })

  const handleHover = (e: React.MouseEvent, show: boolean) => {
    setShowSubMenu(show)
  }
  const ClickEvents =
    mode === 'vertical'
      ? {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault()
            setShowSubMenu(!showSubMenu)
          },
        }
      : {}
  const HoverEvents =
    mode !== 'vertical'
      ? {
          onMouseEnter: (e) => handleHover(e, true),
          onMouseLeave: (e) => handleHover(e, false),
        }
      : {}
  const renderChildren = () => {
    const classes = classNames('whale-submenu', {
      'whale-shubmenu-open': showSubMenu,
    })
    const childComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        })
      } else {
        console.error('Warning: The element is not MenuItem')
      }
    })
    return (
      <CSSTransition
        in={showSubMenu}
        classNames="subMenuAnimation"
        timeout={300}
        unmountOnExit={true}
        appear
      >
        <ul className={classes} data-testid="sub-menu-wrapper">
          {childComponent}
        </ul>
      </CSSTransition>
    )
  }
  return (
    <li key={index} className={classes} {...HoverEvents}>
      <div className="submenu-title" {...ClickEvents}>
        <span className="submenu-title-text">{title}</span>
        <Icon icon="chevron-down" className="submenu-title-icon" />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
