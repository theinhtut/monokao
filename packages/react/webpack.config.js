var path = require('path')
// const whitelist = [
//   resolve('src'), // your application code
//   resolve('node_modules/@dlghq/dialog-components/src'),
//   resolve('node_modules/@dlghq/markdown'),
//   resolve('node_modules/@dlghq/react-l10n'),
//   resolve('node_modules/@dlghq/dialog-types'),
//   resolve('node_modules/@dlghq/dialog-utils'),
//   resolve('node_modules/@dlghq/country-codes')
// ];
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    react: 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
}
