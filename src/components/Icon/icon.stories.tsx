import React from "react";
import Icon from './icon';

export default {
  component: Icon,
  title: '通用/Icon',
}

const Template = (args) => <Icon {...args}/>
export const Default = Template.bind({});
Default.args = {
  icon: 'coffee',
  theme: 'primary'
}