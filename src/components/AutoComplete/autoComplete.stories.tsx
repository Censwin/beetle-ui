/*
 * @Author: Censwin
 * @Date: 2021-10-18 22:44:43
 * @LastEditTime: 2021-10-25 23:30:35
 * @Description: 
 * @FilePath: /whale-design/src/components/AutoComplete/autoComplete.stories.tsx
 */
import React from "react";
import { ComponentStory } from "@storybook/react";
import AutoComplete, {DataSourceType} from './autoComplete'
 
interface IdataList {
  value: string
}

  export default {
    title: '表单/AutoComplete',
    component: AutoComplete,
    argTypes: {
      filterOption: {description: 'function(query):[]'},
      onSelect: {description: 'function(value)'},
      renderOption: {description: 'function(value):ReactNode'},
    }
  }
  
  const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />
  export const Default = Template.bind({});
  Default.args = {
    filterOption: (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`).then(res => res.json()).then(({items}) => {
        const list = items.slice(0, 10).map(item => ({value: item.login, ...item}))
        return list
      })
    },
    onSelect: (val) => {
      console.log(val)
  },
  renderOption: (item: DataSourceType<IdataList>) => {
    return (
      <span>{item.value}</span>
    )
  }
  }