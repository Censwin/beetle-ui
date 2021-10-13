import React, { createContext, useState, useMemo } from 'react'
import classNames from 'classnames'
import { IMenuItemProps } from './menuItem'
type SelectCallback = (index: string | number) => void
interface IMenuContext {
  index: string | number
  onSelect?: SelectCallback
}
type MenuModes = 'vertical' | 'horizontal'
export interface IMenuProps {
  defaultSelectedIndex?: string | number
  className?: string
  mode?: MenuModes
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<IMenuProps> = (props) => {
  const {
    defaultSelectedIndex,
    className: _className,
    mode,
    style: _style,
    children,
  } = props
  const { onSelect } = props
  const [currentActive, setActive] = useState(defaultSelectedIndex)
  const classes = classNames('whale-menu', _className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) onSelect(index)
  }
  const currentItemObj: IMenuContext = useMemo(
    () => ({
      index: currentActive,
      onSelect: handleClick,
    }),
    [currentActive, defaultSelectedIndex]
  )
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index,
        })
      } else {
        console.error('Warning: The element is not MenuItem')
      }
    })
  }
  return (
    <ul className={classes} style={_style} data-testid="menu-test">
      <MenuContext.Provider value={currentItemObj}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultSelectedIndex: 0,
  mode: 'horizontal',
}

export default Menu
