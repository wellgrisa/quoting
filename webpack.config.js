const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
          },
          {
            test: /(\.woff2?|\.ttf|\.eot|\.svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file',
          },
          {
            test: /\.(png|jpg)$/,
            loader: 'url-loader',
            query: { mimetype: 'image/png' },
          },
          {
             test: /\.json$/,
             loader: "json-loader"
          }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
        'Hammer': 'hammerjs/hammer',
      }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
}
