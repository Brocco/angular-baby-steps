module.exports = {
  entry: [
    './app/app.ts',
    './app/index.html',
    './app/list/manager/layout.html',
    './app/list/view/view.html'
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
      { test: /\index.html$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /(?:[^index.html]*).html/, loader: 'file-loader?name=views/[name].[ext]' }
    ]
  }
};