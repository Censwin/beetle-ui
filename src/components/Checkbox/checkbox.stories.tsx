import React from 'react';
import { ComponentStory } from '@storybook/react';
import Checkbox from './Checkbox';
import Group from './Group';
export default {
  title: '表单/checkbox',
  component: Checkbox,
}

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <>
      <h2>用于单个Checkbox</h2>
      <Checkbox {...args}>我是Checkbox</Checkbox>
      <br/>
    </>
  )
}

const Template2: ComponentStory<typeof Group> = (args) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(args.values);
  const onSelectedOptionsChange = (options) => {
    setSelectedValues(options.map(it => it.value))
  }
  return (
    <>
    <h2>多选</h2>
    <Group {...args} onChange={onSelectedOptionsChange}/>
    <h3>Checked values</h3>
    <p>{selectedValues.join(',')}</p>
    </>
  )
}

export const SingleCheckbox = Template.bind({});
SingleCheckbox.args = {
  checked: false,
  disabled: false,
  onChange: (e) => {},
  style: {},
  className: '',
  name: '',
  id: ''
}

export const GroupCheckbox = Template2.bind({})
GroupCheckbox.args = {
  options: [
    {label: 'aaa', value: '111',},
    {label: 'bbb', value: '222',},
    {label: 'ccc', value: '333',},
    {label: 'ddd', value: '444',},
    {label: 'eee', value: '555',},
    {label: 'fff', value: '666',},
    {label: 'ggg', value: '777',},
    {label: 'hhh', value: '888',},
    {label: 'iii', value: '999',},
  ],
  onChange: () => {},
  values: ['111', '222'],
  columns: 4
}


