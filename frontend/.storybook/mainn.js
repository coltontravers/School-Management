const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../app/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.resolve.modules = [
      path.resolve(__dirname, "..", "app"),
      "node_modules",
    ];

    return config;
  },
};
