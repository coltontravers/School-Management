const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../app/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
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
  features: {
    previewMdx2: true,
  },
};
