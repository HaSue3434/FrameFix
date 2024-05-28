module.exports = {
    webpack: {
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
    },
  };
  
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  require('dotenv').config()
  
  module.exports = {
      plugins: [
          new webpack.DefinePlugin({
              "process.env": JSON.stringify(process.env)
          }),
          new HtmlWebpackPlugin(
              { 
                  template: './public/index.html', 
                  title: process.env.REACT_APP_TITLE, 
              }
          ),
      ]
  }