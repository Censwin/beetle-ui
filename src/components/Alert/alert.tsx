/*
 * @Author: Censwin
 * @Date: 2021-10-11 23:09:21
 * @LastEditTime: 2021-10-12 00:27:59
 * @Description:
 * @FilePath: /whale-design/src/components/Alert/alert.tsx
 */
import React, { useState } from "react";
import classNames from "classnames";
export enum Alerttype {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info",
}
interface IAlertProps {
  type?: string;
  message?: string;
  title?: string;
  closable?: boolean;
}
const Alert: React.FC<IAlertProps> = (props) => {
  const [show, setShow] = useState(true);
  const { message, type, title, closable } = props;
  const classes = classNames("alert", {
    [`alert-${type}`]: type,
  });
  if (show) {
    return (
      <div className={classes}>
        {title && <h5>{title}</h5>}
        <p>{message}</p>
        {closable && (
          <span
            className="close-btn"
            onClick={() => {
              setShow(false);
            }}
          >
            ✖️
          </span>
        )}
      </div>
    );
  }
  return null;
};
Alert.defaultProps = {
  type: Alerttype.Error,
  closable: false,
};
export default Alert;
