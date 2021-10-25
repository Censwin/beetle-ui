/*
 * @Author: Censwin
 * @Date: 2021-10-17 20:28:20
 * @LastEditTime: 2021-10-25 23:26:54
 * @Description:
 * @FilePath: /whale-design/src/components/Input/input.stories.tsx
 */
import React from "react";

import Input, { InputProps } from "./input";

export default {
  title: '表单/Input',
  component: Input,
  argTypes: {
    disabled: {
      description: '禁用'
    },
    size: {
      options: ['lg', 'medium', 'sm'],
      defaultValue: 'medium',
      control: { type: 'radio' },
      description: '大小',
    },
    addonBefore: {
      description: '前缀【可选】',
    },
    addonAfter: {
      description: '后缀【可选】',
    }
  }
}

const Template = (args) => <Input placeholder="input something" {...args} />
export const Default = Template.bind({});
Default.args = {
  disabled: false
}
export const IconInput = Template.bind({});
IconInput.args = {
  ...Default.args,
  icon: "search",
  placeholder: 'Icon'
}

export const AddonInput = Template.bind({});
AddonInput.args = {
  addonBefore: "https://",
  addonAfter: ".com"
}


