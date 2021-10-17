/*
 * @Author: Censwin
 * @Date: 2021-10-16 20:02:34
 * @LastEditTime: 2021-10-17 17:25:29
 * @Description:
 * @FilePath: /whale-design/src/components/Button/button.stories.tsx
 */

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button, { ButtonType, ButtonSize } from "./button";

import { withInfo } from "@storybook/addon-info";
const defaultButton = () => {
  return <Button onClick={action("clicked")}>default</Button>;
};
const diffSizeBtn = () => {
  return (
    <>
      <Button size={ButtonSize.Large}>large</Button>
      <Button size={ButtonSize.Small}>small</Button>
    </>
  );
};
const diffTypeBtn = () => {
  return (
    <>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Link}>Link</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Warning}>Warning</Button>
    </>
  );
};
storiesOf("Button", module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: "默认按钮样式",
      inline: true,
    },
  })
  .add("默认", defaultButton)
  .add("大小", diffSizeBtn, { info: { inline: false } })
  .add("样式", diffTypeBtn);
