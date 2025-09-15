const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
    'master-global-styles': './src/assets/styles/master-global.scss',
  },
  mode: 'development',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  output: {
    publicPath: 'http://localhost:3003/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
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
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: [/\.module\.s[ac]ss$/, path.resolve(__dirname, 'src/assets/styles/master-global.scss')],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: path.resolve(__dirname, 'src/assets/styles/master-global.scss'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new ModuleFederationPlugin({
      name: 'componentLib',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button/Button',
        './Card': './src/components/Card/Card',
        './Checkbox': './src/components/Checkbox/Checkbox',
        './DatePicker': './src/components/DatePicker/DatePicker',
        './ExpansionPanel': './src/components/ExpansionPanel/ExpansionPanel',
        './Loader': './src/components/Loader/Loader',
        './ProgressSpinner': './src/components/progress-spinner/progress-spinner',
        './RadioButton': './src/components/RadioButton/RadioButton',
        './Select': './src/components/Select/Select',
        './Tabs': './src/components/Tabs/Tabs',
        './Tooltip': './src/components/Tooltip/Tooltip'
      },
      shared: {
        '@stitches/react': { singleton: true },
        react: { 
          singleton: true,
          requiredVersion: deps.react,
          shareScope: "default",
          eager: false
        },
        'react-dom': { 
          singleton: true,
          requiredVersion: deps["react-dom"],
          shareScope: "default",
          eager: false
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'master-global-styles.css',
    }),
    new IgnoreEmitPlugin(['master-global-styles.js']),
  ],
};
