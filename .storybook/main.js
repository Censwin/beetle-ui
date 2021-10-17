/*
 * @Author: Censwin
 * @Date: 2021-10-16 16:58:00
 * @LastEditTime: 2021-10-17 17:11:41
 * @Description:
 * @FilePath: /whale-design/.storybook/main.js
 */
const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.tsx$/,
    //   use: [
    //     {
    //       loader: require.resolve("react-docgen-typescript-loader"),
    //       options: {
    //         // Provide the path to your tsconfig.json so that your stories can
    //         // display types from outside each individual story.
    //         tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
    //       },
    //     },
    //   ],
    // });

    // Return the altered config
    return config;
  },
};
