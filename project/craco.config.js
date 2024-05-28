const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        {
            plugin: webpack.DefinePlugin,
            options: {
                "process.env": JSON.stringify(process.env)
            }
        },
        {
            plugin: HtmlWebpackPlugin,
            options: {
                template: './public/index.html',
                title: process.env.REACT_APP_TITLE,
            }
        },
    ]
};