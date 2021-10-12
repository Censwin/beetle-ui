import React, { createContext, useState, useMemo } from 'react'
import classNames from 'classnames'

type SelectCallback = (index: string) => void
interface IMenuContext {
  index: string
  onSelect?: SelectCallback
}
type MenuModes = 'vertical' | 'horizontal'
export interface IMenuProps {
  defaultSelectedIndex?: string
  className?: string
  mode?: MenuModes
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

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

  return (
    <ul className={classes} style={_style}>
      <MenuContext.Provider value={currentItemObj}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultSelectedIndex: '0',
  mode: 'horizontal',
}

export default Menu
