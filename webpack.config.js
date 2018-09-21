const helpers = require('./helpers');
const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: { main: './src/index.ts' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'output.js'
    },
    stats: {
        warnings: false,
        //moduleTrace: false,
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        //https://github.com/angular/angular/issues/20357
        // Workaround for Critical dependency 
        // The request of a dependency is an expression in ./node_modules/@angular/core/fesm5/core.js
        //new webpack.ContextReplacementPlugin(
            ///\@angular(\\|\/)core(\\|\/)fesm5/,
            //helpers.root('./src'),
            //{}
        //),
        //new webpack.ContextReplacementPlugin(new RegExp(/\@angular(\\|\/)core(\\|\/)(\@angular|fesm5)/), path.resolve(__dirname, './src') ),
        //new webpack.ContextReplacementPlugin(new RegExp(/\@angular(\\|\/)core(\\|\/)(\@angular|fesm5)/), helpers.root('./src') ),
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)(\@angular|fesm5)/,
            helpers.root('./src'),
            {}
        )

    ]
};