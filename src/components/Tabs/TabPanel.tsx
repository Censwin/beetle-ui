import classNames from 'classnames'
import React, { useEffect } from 'react'
import { ITabPanelProps } from './TabContext'

const TabPanel: React.FC<ITabPanelProps> = (props) => {
  const { activeKey, children, active } = props
  const [visited, setVisited] = React.useState(false)
  useEffect(() => {
    if (active) {
      setVisited(true)
    }
  }, [active])
  const classes = classNames('tab-tabpanel', {
    'tabpanel-active': active,
  })
  const mergedStyle: React.CSSProperties = {}
  if (!active) {
    mergedStyle.visibility = 'hidden'
    mergedStyle.height = 0
    mergedStyle.overflowY = 'hidden'
  }
  return (
    <div className={classes} style={mergedStyle}>
      {active && children}
    </div>
  )
}

export default TabPanel
