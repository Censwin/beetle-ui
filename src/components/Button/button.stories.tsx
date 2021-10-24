/*
 * @Author: Censwin
 * @Date: 2021-10-16 20:02:34
 * @LastEditTime: 2021-10-24 22:31:38
 * @Description:
 * @FilePath: /beetle-design/src/components/Button/button.stories.tsx
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
      <Button size="lg">large</Button>
      <Button size="sm">small</Button>
    </>
  );
};
const diffTypeBtn = () => {
  return (
    <>
      <Button btnType="danger">Danger</Button>
      <Button btnType="default">Default</Button>
      <Button btnType="link">Link</Button>
      <Button btnType="primary">Primary</Button>
      <Button btnType="warning">Warning</Button>
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
