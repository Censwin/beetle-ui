import React from 'react';
import { ComponentStory } from '@storybook/react';
import Card from './Card'
import Button from '../Button';
export default {
  title: '通用/Card',
  component: Card,
  argTypes: {
    title: '我是Title',
    extra: 'ReactNode',
    headerStyle: '',
    headerClassName: '',
    bodyStyle: '',
    bodyClassName: '',
    onClick: (e) => {}
  }
}

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>我是content</Card>

export const Default = Template.bind({});
Default.args = {
  title: '我是Title',
  extra: <Button btnType='link' size='sm'>我是按钮</Button>
}
