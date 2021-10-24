/*
 * @Author: Censwin
 * @Date: 2021-10-18 22:44:43
 * @LastEditTime: 2021-10-24 22:31:41
 * @Description: 
 * @FilePath: /beetle-design/src/components/AutoComplete/autoCompete.stories.tsx
 */
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import AutoComplete, {DataSourceType} from './autoComplete'
 
interface IdataList {
  value: string
}
const defaultAutoComplete = () => {
    const handleFetch = (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`).then(res => res.json()).then(({items}) => {
        const list = items.slice(0, 10).map(item => ({value: item.login, ...item}))
        return list
      })
    }
    const handleSelct = (val) => {
        console.log(val)
    }
    const renderOption = (item: DataSourceType<IdataList>) => {
      return (
        <span>name: {item.value}</span>
      )
    }
  return <AutoComplete filterOption={handleFetch} onSelect={handleSelct} renderOption={renderOption} />;
};

storiesOf("AutoComplete", module)
  .addDecorator(withInfo).add('模糊搜索', defaultAutoComplete)