import React, { useContext } from 'react'
import TabContext from './TabContext'

interface ITabPanelListProps {
  ActiveKey: string
}

const TabPanelList: React.FC<ITabPanelListProps> = (props) => {
  const { ActiveKey } = props
  const context = useContext(TabContext)
  if (!context) return
  const { tabs } = context
  const activeIndex = tabs.findIndex((tab) => tab.key === ActiveKey)
  return (
    <div className="beetle-tab-content-wrapper">
      <div
        className="tab-content"
        style={activeIndex ? { marginLeft: `-${activeIndex}00%` } : {}}
      >
        {tabs.map((tab) => {
          return React.cloneElement(tab.node, {
            key: tab.key,
            tabKey: tab.key,
            active: tab.key === ActiveKey,
          })
        })}
      </div>
    </div>
  )
}

export default TabPanelList
