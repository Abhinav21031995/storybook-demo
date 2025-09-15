import type { StorybookConfig } from '@storybook/react-webpack5';

// Section 1: Core Storybook Configuration
// Defines where to find stories and which file patterns to include
// - Looks for MDX documentation files
// - Looks for story files with various extensions (js, jsx, ts, tsx)
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  // Section 2: Storybook Addons and Framework Setup
  // - Uses SWC compiler for faster builds
  // - Includes documentation addon for automatic API documentation
  // - Configures React with Webpack 5 as the build framework
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // Section 3: Custom Webpack Configuration
  // Extends webpack configuration to handle:
  // - CSS Modules with SASS support
  // - Global SASS styles
  // - Custom naming conventions for CSS modules
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.module\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
              exportLocalsConvention: 'dashes'
            },
            esModule: false
          },
        },
        'sass-loader',
      ],
    });

    // Global SCSS for all other *.scss
    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      exclude: /\.module\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  }
};

export default config;
