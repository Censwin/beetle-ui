import classNames from 'classnames'
import React, { useContext } from 'react'
import TabContext from './TabContext'

interface ITabNavListProps {
  ActiveKey: string
  onTabClick: (activeKey: string, e: React.MouseEvent) => void
}

const TabNavList: React.FC<ITabNavListProps> = (props) => {
  const { ActiveKey } = props
  const { onTabClick } = props
  const context = useContext(TabContext)
  if (!context) return
  const { tabs } = context

  const RenderNavList = () => {
    return tabs.map((item, i) => {
      const { key, label } = item
      const classes = classNames('nav-item', {
        selected: ActiveKey === key,
      })
      return (
        <li key={key} className={classes} onClick={(e) => onTabClick(key, e)}>
          {label}
        </li>
      )
    })
  }

  return (
    <div className="beetle-tab-nav-wrapper">
      <ul className="beetle-tab-nav">{RenderNavList()}</ul>
    </div>
  )
}

export default TabNavList
