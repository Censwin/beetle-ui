/*
 * @Author: Censwin
 * @Date: 2021-10-18 22:26:09
 * @LastEditTime: 2021-10-24 22:31:39
 * @Description:
 * @FilePath: /beetle-design/src/components/AutoComplete/autoComplete.tsx
 */
import React, { ReactElement, useState, useEffect, useRef } from "react";
import classNames from "classnames";

import Input, { InputProps } from "../Input/input";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
interface DataSource {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSource;
export interface IAutoCompleteProps extends Omit<InputProps, "onSelect"> {
  filterOption: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplete: React.FC<IAutoCompleteProps> = (props) => {
  const { filterOption, onSelect, renderOption, value, ...otherProps } = props;
  const [inputvalue, setInputValue] = useState<string>(value as string);
  const [options, setOptions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const triggerSearch = useRef(true);
  const componentRef = useRef<HTMLDivElement>();
  const debounceVal = useDebounce(inputvalue);
  useClickOutside(componentRef, () => {
    setOptions([]);
  });
  useEffect(() => {
    if (debounceVal && triggerSearch.current) {
      const res = filterOption(debounceVal);
      if (res instanceof Promise) {
        setLoading(true);
        res.then((data) => {
          setLoading(false);
          setOptions(data);
        });
      } else {
        setOptions(res);
      }
    } else {
      setOptions([]);
    }
  }, [debounceVal]);

  const handleChange = (e) => {
    triggerSearch.current = true;
    const value = e.target.value.trim();
    setInputValue(value);
  };
  const handleClickItem = (val) => {
    triggerSearch.current = false;
    setInputValue(val);
    setOptions([]);
    if (onSelect) {
      onSelect(val);
    }
  };
  const renderItem = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item;
  };
  const renderDropdown = () => {
    return (
      <ul>
        {options.map((item, index) => (
          <li key={index} onClick={() => handleClickItem(item.value)}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="beetle-auto-complete" ref={componentRef}>
      <Input value={inputvalue} onChange={handleChange} {...otherProps} />
      {loading && (
        <ul style={{ textAlign: "center" }}>
          <Icon icon="spinner" spin />
        </ul>
      )}
      {options.length > 0 && renderDropdown()}
    </div>
  );
};

export default AutoComplete;
