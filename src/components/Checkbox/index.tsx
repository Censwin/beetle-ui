import React from 'react'
import InternalCheckbox, { ICheckboxProps } from './Checkbox'
import Group from './Group'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    ICheckboxProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: typeof Group
}

const Checkbox = InternalCheckbox as CompoundedComponent
Checkbox.Group = Group

export default Checkbox
