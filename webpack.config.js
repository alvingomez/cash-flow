//minimal Webpack setup

const path = require('path');

//console.log(path.join(__dirname, 'public'));

module.exports = {
 mode: 'development',
 entry: './src/app.js',
 output: {
  path: path.join(__dirname, 'public'),
  filename:'bundle.js'
 },
 //SETTING UP THE LOADER 
 module: {
  rules: [{ 
   loader: 'babel-loader', 
   test: /\.js$/,
   exclude: /node-modules/   
  },{
    test: /\.s?css$/,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader'
    ]
  }]
 },
 devServer: {
  contentBase: path.join(__dirname, 'public')
 },
 devtool:'cheap-module-eval-source-map'
};