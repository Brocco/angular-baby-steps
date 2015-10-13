var exclude = /node_modules/;

module.exports = {
  entry: [
    './app/app.ts'
  ],
  output: {
    path: './dist/',
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'raw', exclude: exclude }
    ]
  }
};