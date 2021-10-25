/*
 * @Author: Censwin
 * @Date: 2021-10-25 22:54:43
 * @LastEditTime: 2021-10-25 23:03:37
 * @Description: 
 * @FilePath: /whale-design/src/components/Alert/alert.stories.tsx
 */
import React from "react";
import Alert from './alert';
import { ComponentStory } from '@storybook/react';
export default {
  component: Alert,
  title: '反馈/Alert',
  // argTypes: {
  //   type: {
  //     options: ['success', 'error', 'warning', 'info'],
  //     defaultValue: 'success',
  //     control: { type: 'radio' },
  //     description: 'Alert 样式',
  //   }
  // },
  args: {
    type: "success",
    message: "test test test test test test test ",
    title: 'alert title',
    closable: false
  }
}
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}>{args.type}</Alert>
export const Error = Template.bind({});
Error.args = {
  type: 'error'
}
export const Suucess = Template.bind({});
Suucess.args = {
  type: 'success'
}
export const Warning = Template.bind({});
Warning.args = {
  type: 'warning'
}
export const Info = Template.bind({});
Info.args = {
  type: 'info'
}