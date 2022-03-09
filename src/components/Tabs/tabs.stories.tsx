import React from 'react';
import { ComponentStory } from '@storybook/react';
import Tabs from './index'
export default {
  title: '通用/tabs',
  component: Tabs,
}

const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <>
      <h2>Tabs</h2>
      <Tabs {...args}>
        <Tabs.Item key="1" label="1">1222</Tabs.Item>
        <Tabs.Item key="2" label="2">23333</Tabs.Item>
        <Tabs.Item key="3" label="3">312312</Tabs.Item>
      </Tabs>
      <br/>
    </>
  )
}

export const TabComponent = Template.bind({});
TabComponent.args = {
  defaultActiveKey: '1',
  onChange: (key) => {console.log(key)},
  onTabClick: (activeKey, e) => {console.log(activeKey)}
}
