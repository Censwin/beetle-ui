import React, { FC } from 'react'
import type { ITabPanelProps } from './TabContext'
import Tabs, { ITabsProps } from './Tabs'
import TabPanel from './TabPanel'

type ITabsComponent = FC<ITabsProps> & {
  Item: FC<ITabPanelProps>
}

const TransTabs = Tabs as ITabsComponent
TransTabs.Item = TabPanel

export default TransTabs
