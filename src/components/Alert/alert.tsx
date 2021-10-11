/*
 * @Author: Censwin
 * @Date: 2021-10-11 23:09:21
 * @LastEditTime: 2021-10-11 23:37:58
 * @Description:
 * @FilePath: /whale-design/src/components/Alert/alert.tsx
 */
import React from "react";
import classNames from "classnames";
export enum Alerttype {
  Success = "success",
  Error = "error",
  Warning = "warring",
  Info = "info",
}
interface IAlertProps {
  type?: string;
  message?: string;
}
const Alert: React.FC<IAlertProps> = (props) => {
  const { message, type } = props;
  const classes = classNames("alert", {
    [`alert-${type}`]: type,
  });
  return <div className={classes}>{message}</div>;
};
Alert.defaultProps = {
  type: Alerttype.Error,
};
export default Alert;
