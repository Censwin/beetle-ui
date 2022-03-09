import React from 'react'
import * as ReactIs from 'react-is'

export const Thottle = function (fn: any, delay: number) {
  let flag = false
  return function (...args) {
    const self = this
    if (flag) return
    flag = true
    setTimeout(() => {
      flag = false
      fn.apply(self, args)
    }, delay)
  }
}

export const Debounce = function (fn: any, delay: number) {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    const self = this
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, delay)
  }
}

export const ChildrenToArray = (
  children: React.ReactNode
): React.ReactElement[] => {
  let res: React.ReactElement[] = []
  React.Children.forEach(children, (child: any) => {
    if (child === undefined || child === null) return
    if (Array.isArray(child)) {
      res = res.concat(ChildrenToArray(child))
    } else if (ReactIs.isFragment(child) && child.props) {
      res = res.concat(ChildrenToArray(child.props.children))
    } else {
      res.push(child)
    }
  })
  return res
}
