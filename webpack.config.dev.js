const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distFolder = 'dist';

module.exports = {
    entry: {
        'app': './test-page/scripts/app'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, distFolder)
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        modules: [
            path.resolve(__dirname, './src'),
            'node_modules'
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, distFolder),
        compress: false,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                            'react',
                            'stage-0'
                        ],
                        plugins: [
                            'react-hot-loader/babel'
                        ]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        'postcss-loader?sourceMap=inline',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: './test-page/index.html'
        })
    ]
};
