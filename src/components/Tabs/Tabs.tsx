/*
 * @Date: 2022-01-24 17:31:32
 * @LastEditors: k200c
 * @LastEditTime: 2022-01-25 10:47:44
 * @Description:
 * @FilePath: \whale-design\src\components\Tabs\Tabs.tsx
 */
import React, { useMemo, useState, useEffect } from 'react'
import classNames from 'classnames'
import TabContext from './TabContext'

export interface ITabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode
}

const parseTabList = () => {}

const Tabs: React.FC<ITabsProps> = (props) => {
  const { children } = props
  const tabs = parseTabList()
  1
  return <div className={classNames('beetle-tabs')}>123</div>
}
