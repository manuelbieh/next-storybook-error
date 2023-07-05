const path = require('path');
module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'storybook-addon-performance',
    'storybook-css-modules-preset',
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  staticDirs: ['../src/assets', '../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    };
    config.resolve.alias['config'] = path.resolve(__dirname, '../config');
    config.resolve.alias['@emotion/core'] = '@emotion/react';
    config.resolve.alias['emotion-theming'] = '@emotion/react';
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];
    return config;
  },
  docs: {
    autodocs: true,
  },
};
