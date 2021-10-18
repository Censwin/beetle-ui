/*
 * @Author: Censwin
 * @Date: 2021-10-18 22:44:43
 * @LastEditTime: 2021-10-18 23:02:06
 * @Description: 
 * @FilePath: /whale-design/src/components/AutoComplete/autoCompete.stories.tsx
 */
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import AutoComplete from './autoComplete'


const defaultAutoComplete = () => {
    const dataList = ['a','aaa','b','c','d','e']
    const filterOptions = (value: string) => dataList.filter(item => item.includes('a'))
    const handleSelct = (val) => {
        console.log(val)
    }
  return <AutoComplete filterOption={filterOptions} onSelect={handleSelct} />;
};

storiesOf("AutoComplete", module)
  .addDecorator(withInfo).add('模糊搜索', defaultAutoComplete)