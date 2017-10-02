var webpack = require("webpack");

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: './docs/js/onsen.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // important
   }
  }
}
