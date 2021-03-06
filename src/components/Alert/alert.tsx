/*
 * @Author: Censwin
 * @Date: 2021-10-11 23:09:21
 * @LastEditTime: 2021-10-25 18:03:54
 * @Description:
 * @FilePath: /beetle-design/src/components/Alert/alert.tsx
 */
import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import { CSSTransition } from 'react-transition-group'
export enum Alerttype {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

type alertType = 'success' | 'error' | 'warning' | 'info'
interface IAlertProps {
  type?: alertType
  message?: string
  title?: string
  closable?: boolean
}
const Alert: FC<IAlertProps> = (props) => {
  const [show, setShow] = useState(false)
  const { message, type, title, closable } = props
  const classes = classNames('alert', {
    [`alert-${type}`]: type,
  })
  useEffect(() => {
    setShow(true)
  }, [])
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="Alert-wrapper"
      unmountOnExit={true}
      appear
    >
      <div className={classes}>
        {title && <h5>{title}</h5>}
        <p>{message}</p>
        {closable && (
          <span
            className="close-btn"
            onClick={() => {
              setShow(false)
            }}
          >
            <Icon icon="times-circle" />
          </span>
        )}
      </div>
    </CSSTransition>
  )
}
Alert.defaultProps = {
  type: 'success',
  closable: false,
}
export default Alert
