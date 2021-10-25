import React from "react";
import Alert from './alert';
import { ComponentStory } from '@storybook/react';
export default {
  component: Alert,
  title: '反馈/Alert',
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info'],
      defaultValue: 'success',
      control: { type: 'radio' },
      description: 'Alert 样式',
    }
  },
  args: {
    type: "success",
    message: "test test test test test test test ",
    title: 'alert title',
    closable: false
  }
}
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}>{args.type}</Alert>
export const Default = Template.bind({});