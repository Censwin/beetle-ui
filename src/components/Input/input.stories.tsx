/*
 * @Author: Censwin
 * @Date: 2021-10-17 20:28:20
 * @LastEditTime: 2021-10-24 22:31:29
 * @Description:
 * @FilePath: /beetle-design/src/components/Input/input.stories.tsx
 */
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { withInfo } from "@storybook/addon-info";

import Input, { InputProps } from "./input";

const DefaultInput = () => {
  return (
    <>
      <Input placeholder="input something" />
      <Input placeholder="icon" icon="search" />
      <Input placeholder="disbale" disabled />
      <Input placeholder="lg" size="lg" />
      <Input placeholder="sm" size="sm" />
      <Input placeholder="defore" addonBefore="https://" />
      <Input placeholder="after"  addonAfter=".com"/>
      <Input placeholder="befpre + after" addonBefore="https://" addonAfter=".com"/>
    </>
  )
}

storiesOf("input", module).addDecorator(withInfo).add("input", DefaultInput);
