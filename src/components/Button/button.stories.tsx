/*
 * @Author: Censwin
 * @Date: 2021-10-16 20:02:34
 * @LastEditTime: 2021-10-25 17:34:14
 * @Description:
 * @FilePath: /beetle-design/src/components/Button/button.stories.tsx
 */

import React from "react";
import {Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './button'

export default {
  component: Button,
  title: '通用/Button',
  argTypes: {
    size: {
      options: ['lg', 'medium', 'sm'],
      defaultValue: 'medium',
      control: { type: 'radio' },
      description: '控制按钮大小',
    },
    btnType: {
      options: ['primary', 'default', 'warning', 'danger', 'link'],
      defaultValue: 'default',
      control: { type: 'radio' },
      description: '控制按钮样式',
    },
    disabled: {
      description: '禁用'
    }
  }
};


const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.btnType}</Button>

export const Default = Template.bind({});
Default.args = {
  btnType: "default",
  size: "medium",
  disabled: false
}
export const Link = Template.bind({});
Link.args = {
  btnType: "link",
  href: 'http://www.baidu.com'
}