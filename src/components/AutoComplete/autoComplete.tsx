/*
 * @Author: Censwin
 * @Date: 2021-10-18 22:26:09
 * @LastEditTime: 2021-10-19 17:48:46
 * @Description:
 * @FilePath: /whale-design/src/components/AutoComplete/autoComplete.tsx
 */
import React, { ReactElement, useState } from 'react'
import classNames from 'classnames'

import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
interface DataSource {
  value: string
}
export type DataSourceType<T = {}> = T & DataSource
export interface IAutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  filterOption: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}

const AutoComplete: React.FC<IAutoCompleteProps> = (props) => {
  const { filterOption, onSelect, renderOption, value, ...otherProps } = props
  const [inputvalue, setInputValue] = useState(value)
  const [options, setOptions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const handleChange = (e) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      const res = filterOption(value)
      if (res instanceof Promise) {
        setLoading(true)
        res.then((data) => {
          setLoading(false)
          setOptions(data)
        })
      } else {
        setOptions(res)
      }
    } else {
      setOptions([])
    }
  }
  const handleClickItem = (val) => {
    setInputValue(val)
    setOptions([])
    if (onSelect) {
      onSelect(val)
    }
  }
  const renderItem = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item
  }
  const renderDropdown = () => {
    console.log(options)
    return (
      <ul>
        {options.map((item, index) => (
          <li key={index} onClick={() => handleClickItem(item.value)}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className="whale-auto-complete">
      <Input value={inputvalue} onChange={handleChange} {...otherProps} />
      {loading && (
        <ul>
          <Icon icon="spinner" spin />
        </ul>
      )}
      {options.length > 0 && renderDropdown()}
    </div>
  )
}

export default AutoComplete
