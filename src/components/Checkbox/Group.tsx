import React, { FC, useEffect, useState, useCallback, useMemo } from 'react'
import Checkbox from './Checkbox'

interface Option {
  label: string
  value: string
}

interface Props {
  options: Option[]
  columns?: number
  values?: string[]
  onChange?: (options: Option[]) => void
}

type ValueType = String | Number

const InternalGroup: FC<Props> = (props) => {
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
    (option: Option) => {
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
    let children = options.map((option: Option, index: number) => {
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
