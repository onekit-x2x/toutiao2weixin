/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const isDev = process.argv.indexOf('--develop') >= 0
const isWatch = process.argv.indexOf('--watch') >= 0
const demoSrc = path.resolve(__dirname, './demo')
const demoDist = path.resolve(__dirname, '../miniprogram_dev')
const src = path.resolve(__dirname, '../src')
const dev = path.join(demoDist, 'toutiao2weixin')
const dist = path.resolve(__dirname, '../miniprogram_dist')

module.exports = {
  entry: [
    'ui/ad/ad',
    'ui/button/button',
    'ui/canvas/canvas',
    'ui/checkbox/checkbox',
    'ui/checkbox-group/checkbox-group',
    'ui/icon/icon',
    'ui/image/image',
    'ui/input/input',
    'ui/label/label',
    'ui/live-player/live-player',
    'ui/map/map',
    'ui/navigator/navigator',
    'ui/picker/picker',
    'ui/picker-view/picker-view',
    'ui/picker-view-column/picker-view-column',
    'ui/progress/progress',
    'ui/radio/radio',
    'ui/radio-group/radio-group',
    'ui/rich-text/rich-text',
    'ui/scroll-view/scroll-view',
    'ui/slider/slider',
    'ui/slider/slider',
    'ui/swiper/swiper',
    'ui/swiper-item/swiper-item',
    'ui/switch/switch',
    'ui/text/text',
    'ui/textarea/textarea',
    'ui/video/video',
    'ui/view/view',
    'ui/web-view/web-view'
  ],

  isDev,
  isWatch,
  srcPath: src, // 源目录
  distPath: isDev ? dev : dist, // 目标目录

  demoSrc, // demo 源目录
  demoDist, // demo 目标目录

  wxss: {
    less: false, // 使用 less 来编写 wxss
    sourcemap: false, // 生成 less sourcemap
  },

  js: {
    webpack: true, // 使用 webpack 来构建 js
  },

  webpack: {
    mode: 'production',
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    target: 'node',
    externals: [nodeExternals()], // 忽略 node_modules
    module: {
      rules: [{
        test: /\.js$/i,
        use: [{
          loader: 'thread-loader',
        }, {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }, {
          loader: 'eslint-loader',
        }],
        exclude: /node_modules/
      }, {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{
          loader: 'thread-loader',
        }, {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }, {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            happyPackMode: true,
          },
        }, {
          loader: 'eslint-loader',
        }],
      }],
    },
    resolve: {
      modules: [src, 'node_modules'],
      extensions: ['.js', '.json'],
    },
    plugins: [
      new webpack.DefinePlugin({}),
      new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    ],
    optimization: {
      minimize: false,
    },
    devtool: 'source-map', // 生成 js sourcemap
    performance: {
      hints: 'warning',
      assetFilter: assetFilename => assetFilename.endsWith('.js')
    }
  },

  copy: ['onekit.wxss', 'api', 'js', 'OnekitApp.js', 'OnekitBehavior.js', 'OnekitComponent.js', 'OnekitPage.js', 'tt.js'], // 将会复制到目标目录
}
