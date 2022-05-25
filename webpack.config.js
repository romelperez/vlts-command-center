const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cwd = process.cwd();
const tsConfigFilePath = path.join(cwd, 'tsconfig.json');

const { NODE_ENV } = process.env;
const SRC_PATH = path.join(cwd, 'src');
const STATIC_PATH = path.join(cwd, 'static');
const BUILD_PATH = path.join(cwd, 'build');

const isProduction = NODE_ENV === 'production';

module.exports = {
  mode: NODE_ENV ?? 'development',
  devtool: isProduction ? false : 'eval-source-map',
  entry: {
    app: path.join(SRC_PATH, 'index.tsx')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: tsConfigFilePath,
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfigFilePath
      })
    ],
    alias: {
      '@app': path.join(process.cwd(), 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: '/',
      template: path.join(SRC_PATH, 'index.html'),
      filename: path.join(BUILD_PATH, 'index.html')
    }),
    isProduction &&
      new CopyWebpackPlugin({
        patterns: [
          {
            from: STATIC_PATH,
            to: BUILD_PATH
          }
        ]
      })
  ].filter(Boolean),
  devServer: {
    static: [
      {
        directory: STATIC_PATH,
        watch: true
      },
      {
        directory: BUILD_PATH,
        watch: true
      }
    ],
    historyApiFallback: true,
    allowedHosts: 'all',
    compress: true,
    host: '127.0.0.1',
    port: 5000,
    open: true
  }
};
