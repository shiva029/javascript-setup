module.exports = {
    entry: './src/js/app.js',
    output: {
      filename: 'dist/bundle.js'
    },
    devServer: {
        historyApiFallback: {
          disableDotRule: true
        }
      }
  };