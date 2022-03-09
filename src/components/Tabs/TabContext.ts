/*
 * @Date: 2022-01-24 17:39:21
 * @LastEditors: k200c
 * @LastEditTime: 2022-01-24 18:10:25
 * @Description:
 * @FilePath: \whale-design\src\components\Tabs\TabContext.ts
 */
import React, { createContext } from 'react'

export interface ITabPanelProps {
  label?: string
  activeKey?: string
  children?: React.ReactNode
  active?: boolean
}

export interface ITab extends ITabPanelProps {
  key: string
  node: React.ReactElement
}

export interface ITabContextProps {
  tabs: ITab[]
}

export default createContext<ITabContextProps | null>(null)
