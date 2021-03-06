const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

const ROOT = path.join(__dirname, './../');
const SRC = path.join(ROOT, 'src');
const PRESETS = ['es2015', 'stage-0', 'react'];
const PLUGINS = [
  'add-module-exports',
  'transform-decorators-legacy'
];

module.exports = {
  entry: {
    'events.js': path.join(ROOT, 'src/events/index.js'),
    'options.js': path.join(ROOT, 'src/options/index.js'),
    'content.js': path.join(ROOT, 'src/content/index.js'),
    'popup.js': path.join(ROOT, 'src/popup/index.js'),
  },
  output: {
    // `[name]` makes sure that every key in the webpack config's `entry` becomes
    // a seperate file in the output, with the name of the file being the key name,
    // See: http://stackoverflow.com/questions/31907672/how-to-set-multiple-file-entry-and-output-in-project-with-webpack
    filename: '[name]',
    // This is where the assets are physically written on disk
    path: path.join(ROOT, './build/'),
    // This is where the assets are served up. In our case, just the root directory
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss']
  },
  plugins: [
    // Extracts all the styles into a single `style.css` file served at the `publicPath`
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new DashboardPlugin()
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        include: [SRC],
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: PRESETS,
          plugins: PLUGINS
        }
      }, {
        test: /\.json$/,
        include: [SRC],
        loader: 'json'
      }, {
        test: /.scss$/,
        include: [SRC],
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
      }, {
        test: /\.css$/,
        include: [SRC],
        loader: 'style!css!postcss'
      }, {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
        include: [SRC]
      }
    ],
    noParse: /\.min\.js/
  }
};
