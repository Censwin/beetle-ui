/*
 * @Date: 2022-01-24 16:35:50
 * @LastEditors: k200c
 * @LastEditTime: 2022-01-25 09:59:09
 * @Description: 
 * @FilePath: \whale-design\src\components\Message\message.stories.tsx
 */
import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '../Button';
import Message from './message';

export default {
  title: '反馈/Message',
  component: Message
}

const Template = (args) => <><Button btnType='primary' onClick={() => Message.info('点我干嘛')}>点我</Button><code>{"<Button btnType='primary' onClick={() => Message.info('点我干嘛')}>点我</Button>"}</code></>

export const Default = Template.bind({});