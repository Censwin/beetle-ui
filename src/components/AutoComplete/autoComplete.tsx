/*
 * @Author: Censwin
 * @Date: 2021-10-18 22:26:09
 * @LastEditTime: 2021-10-18 23:46:27
 * @Description:
 * @FilePath: /whale-design/src/components/AutoComplete/autoComplete.tsx
 */
import React, { useState } from "react";
import classNames from "classnames";

import Input, { InputProps } from "../Input/input";
import { library } from "@fortawesome/fontawesome-svg-core";

export interface IAutoCompleteProps extends Omit<InputProps, "onSelect"> {
  filterOption: (str: string) => string[];
  onSelect?: (item: string) => void;
}

const AutoComplete: React.FC<IAutoCompleteProps> = (props) => {
  const { filterOption, onSelect, value, ...otherProps } = props;

  const [inputvalue, setInputValue] = useState(value);
  const [options, setOptions] = useState<string[]>([]);
  console.log(options);
  const handleChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
    if (value) {
      const res = filterOption(value);
      setOptions(res);
    } else {
      setOptions([]);
    }
  };
  const handleClickItem = (val) => {
    setInputValue(val);
    setOptions([]);
    if (onSelect) {
      onSelect(val);
    }
  };
  const renderDropdown = () => {
    return (
      <ul>
        {options.map((item, index) => (
          <li key={item + index} onClick={() => handleClickItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="whale-auto-complete">
      <Input value={inputvalue} onChange={handleChange} {...otherProps} />
      {options.length > 0 && renderDropdown()}
    </div>
  );
};

export default AutoComplete;
