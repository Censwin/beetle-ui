import React, { PropsWithChildren, useEffect, useState } from 'react'
import classNames from 'classnames'

export interface ICheckboxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: Boolean
  checked?: Boolean
  style?: React.CSSProperties
  disabled?: boolean
  className?: string
  name?: string
  id?: string
}
const InternalCheckbox = React.forwardRef<
  HTMLInputElement,
  PropsWithChildren<ICheckboxProps>
>((props, refs) => {
  const { children, style, disabled, className, name, id, defaultChecked } =
    props
  const { onChange } = props
  const [checked, setChecked] = useState(
    'checked' in props ? props.checked : defaultChecked
  )

  useEffect(() => {
    if ('checked' in props) {
      setChecked(props.checked)
    }
  }, [props.checked])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    if (!('checked' in props)) {
      setChecked(e.target.checked)
    }
    onChange?.(e)
  }

  const classString = classNames('checkbox-wrapper', {
    disabled: disabled,
    className,
  })

  return (
    <label style={style} className={classString}>
      <span>
        <input
          ref={refs}
          data-testid="checkbox"
          type="Checkbox"
          onChange={handleChange}
          checked={!!checked}
          disabled={disabled}
          name={name}
          id={id}
        />
      </span>
      {children !== undefined && <span>{children}</span>}
    </label>
  )
})

InternalCheckbox.defaultProps = {
  defaultChecked: false,
}

export default InternalCheckbox
