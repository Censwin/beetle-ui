import React from 'react';
import {Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import Test from './Test';

export default {
  title: '通用/Test',
  component: Test,
}

const Template: ComponentStory<typeof Test> = (args) => <Test {...args}>{args.type}</Test>
export const Default = Template.bind({});
Default.args = {
  type: 'aaa'
}