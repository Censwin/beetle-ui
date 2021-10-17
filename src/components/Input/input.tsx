/*
 * @Author: Censwin
 * @Date: 2021-10-17 20:18:43
 * @LastEditTime: 2021-10-17 22:11:52
 * @Description:
 * @FilePath: /whale-design/src/components/Input/input.tsx
 */

import React, { ReactElement } from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon/icon";

type inputSize = "lg" | "sm";
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  size?: inputSize;
  icon?: IconProp;
  className?: string;
  /** 带标签的 input，设置前置标签 */
  addonBefore?: string | ReactElement;
  /** 带标签的 input，设置后置标签 */
  addonAfter?: string | ReactElement;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    addonBefore,
    addonAfter,
    className,
    ...otherProps
  } = props;
  const classes = classNames("whale-input-wrapper", className, {
    [`input-${size}`]: size,
    "is-disabled": disabled,
    "input-group": addonBefore || addonAfter,
    "input-group-addonBefore": !!addonBefore,
    "input-group-addonAfter": !!addonAfter,
  });

  return (
    <div className={classes}>
      {addonBefore && (
        <div className="input-group-preand-wrapper">{addonBefore}</div>
      )}
      {icon && (
        <div className="input-icon-wrapper">
          <Icon icon="times-circle" />
        </div>
      )}
      <input className="whale-input" disabled={disabled} {...otherProps} />
      {addonAfter && (
        <div className="input-group-preand-wrapper">{addonAfter}</div>
      )}
    </div>
  );
};

export default Input;
