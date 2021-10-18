import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Icon from './icon'

const defaultIcon = () => {
  return <Icon icon="coffee"/>;
};

storiesOf("Icon", module)
  .addDecorator(withInfo).add('图标', defaultIcon)