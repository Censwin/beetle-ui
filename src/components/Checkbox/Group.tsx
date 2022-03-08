import React, { FC, useEffect, useState, useCallback, useMemo } from 'react'
import Checkbox from './Checkbox'

interface IOption {
  label: string
  value: string
}

export interface IGroupProps {
  options: IOption[]
  columns?: number
  values?: string[]
  onChange?: (options: IOption[]) => void
}

type ValueType = String | Number

const InternalGroup: FC<IGroupProps> = (props) => {
  const { options, columns, values } = props
  const { onChange } = props
  const [value, setValue] = useState<ValueType[]>(values || [])

  useEffect(() => {
    if (columns && !Number.isInteger(columns)) {
      console.error('columns must be an integer')
    }
  }, [columns])

  useEffect(() => {
    onChange?.(options.filter((option) => value.indexOf(option.value) !== -1))
  }, [value])

  const clickOption = useCallback(
    (option: IOption) => {
      const index = value.indexOf(option.value)
      let newValue = [...value]
      if (index === -1) {
        newValue.push(option.value)
      } else {
        newValue.splice(index, 1)
      }
      setValue(newValue)
    },
    [value]
  )

  const RenderChildrenCheckbox = useMemo(() => {
    let children = options.map((option: IOption, index: number) => {
      return (
        <React.Fragment key={option.value + index}>
          <Checkbox
            checked={value.indexOf(option.value) !== -1}
            onChange={(_) => clickOption(option)}
            key={option.value.toString()}
            name={option.label}
          >
            {option.label}
          </Checkbox>
        </React.Fragment>
      )
    })
    return children
  }, [columns, options, value])

  return (
    <div className="beetle-Group" data-testid="Group-test">
      <div className="checkbox-group-wrapper" style={{ columnCount: columns }}>
        {RenderChildrenCheckbox}
      </div>
    </div>
  )
}

const Group = React.memo(InternalGroup)

export default Group
