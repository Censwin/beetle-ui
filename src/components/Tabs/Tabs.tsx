/*
 * @Date: 2022-01-24 17:31:32
 * @LastEditors: k200c
 * @LastEditTime: 2022-01-25 10:47:44
 * @Description:
 * @FilePath: \whale-design\src\components\Tabs\Tabs.tsx
 */
import React, { useMemo, useState, useEffect, useCallback } from 'react'
import classNames from 'classnames'
import TabContext, { ITab, ITabPanelProps } from './TabContext'
import { ChildrenToArray } from './../../util'
import TabNavList from './TabNavList'
import TabPanelList from './TabPanelList'
export interface ITabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultActiveKey?: string
  onChange?: (key: string) => void
  style?: React.CSSProperties
  className?: string
  onTabClick?: (activeKey: string, e: React.MouseEvent) => void
}

function parseTabList(children: React.ReactNode): ITab[] {
  // https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement#:~:text=Element%20is%20ReactElement%20%2C%20whose%20props,render()%20in%20class%20components.
  const tabsArr = ChildrenToArray(children).map(
    (node: React.ReactElement<ITabPanelProps>) => {
      if (React.isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined
        return {
          key,
          ...node.props,
          node,
        }
      }
      return null as any
    }
  )
  return tabsArr.filter((tab) => tab)
}

const Tabs: React.FC<ITabsProps> = (props) => {
  const {
    defaultActiveKey,
    style,
    className,
    children,
    onChange,
    onTabClick,
    ...otherProps
  } = props
  const [ActiveKey, setActiveKey] = useState(defaultActiveKey || '')

  const memoContext = useMemo(() => {
    const parsedTabs = parseTabList(children)
    return { tabs: parsedTabs }
  }, [children])

  const onTabNavClick = useCallback(
    (key: string, e: React.MouseEvent) => {
      if (onTabClick) {
        onTabClick(key, e)
      }
      if (key !== ActiveKey) {
        setActiveKey(key)
      }
    },
    [ActiveKey]
  )

  return (
    <TabContext.Provider value={memoContext}>
      <div className={classNames('beetle-tabs', className)} {...otherProps}>
        <TabNavList ActiveKey={ActiveKey} onTabClick={onTabNavClick} />
        <TabPanelList ActiveKey={ActiveKey} />
      </div>
    </TabContext.Provider>
  )
}

export default Tabs
