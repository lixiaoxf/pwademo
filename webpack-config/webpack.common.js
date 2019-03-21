const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin =  require('webpack-manifest-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const basePath = path.resolve(__dirname, "../");
const publicPath = path.resolve(basePath,'app/public/')
const staticPath = path.resolve(basePath,'static/')

module.exports = {
    entry: {
        'home/index': './home/index.js',
        'spa/index': './spa/index.js',
        
        'ssr/index/index'  : './ssr/index/index.js',
        'ssr/detail/index'  : './ssr/detail/index.js',
        'ssr/news/index'  : './ssr/news/index.js'
    },
    context: staticPath,
    output: {
        filename: '[name].js',
        path: publicPath,
        chunkFilename: '[name].chunk.js'
    },
    optimization: {
        splitChunks: {
          chunks: 'all', // 异步加载chunk
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: 'common/index',
          cacheGroups: {
            default: {
                minChunks: 2,
                priority: -20,
                name: "common/default",
                chunks: "all",
                reuseExistingChunk: true,
            },
            vendors: {
                name: "common/vendors",
                chunks: "all",
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            }
          }
        }
    },
    resolve:{
        alias:{
            '@':staticPath,
            'rem':path.resolve(staticPath, 'common/js/flexible/rem.js'),
        },
        extensions:[
            '.js',
            '.vue',
            '.json'
        ]
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: true
                    }
                }
            },
            
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 
                        'sass-loader',
                    {
                        loader:"postcss-loader",
                        options: {
                            plugins: [
                                require("autoprefixer") 
                            ]
                        }
                    }
                ]
                })
            },
            { 
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    
                    {// base64图片
                        loader:'url-loader',
                        options:{
                            name:'[path][name][hash:5].min.[ext]',
                            publicPath:'/',
                            limit: 1000
                        }
                    },
                    {// 压缩图片
                        loader:'img-loader',
                        options:{
                            pngquant:{ // png图片适用
                                quality: 80
                            }
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                }  
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['app/public'])  ,
        new ExtractTextPlugin({
            filename:'[name].css'
        }),
        new VueLoaderPlugin(),
        new ManifestPlugin(),
        // new HtmlWebpackPlugin({
        //     filename:'../view/home/index.html',
        //     hash: true,
        //     chunks:['manifest','common/labar','home/index'],
        //     template: path.join(__dirname,'../static/home/view/index.html')
        // }),
        // new HtmlWebpackPlugin({
        //     filename:'../view/some/one/index.html',
        //     hash: true,
        //     chunks:['manifest','common/labar','some/one/index'],
        //     template: path.join(__dirname,'../static/some/one/view/index.html')
        // }),
        // new HtmlWebpackPlugin({
        //     filename:'../view/some/two/index.html',
        //     hash: true,
        //     chunks:['manifest','common/labar','some/two/index'],
        //     template: path.join(__dirname,'../static/some/two/view/index.html')
        // }),
        // new InjectManifest({
        //     swSrc: path.resolve(staticPath, 'serviceWorker/sw.js'),
        // // }),
        // new WorkboxPlugin.InjectManifest({
        //     swSrc: path.resolve(staticPath, 'serviceWorker/sw.js')
        // }),
        new CopyWebpackPlugin([
            {
                from: {
                    glob:'**/*/view/**',
                    dot: true
                },
                to: '../view/[path]/../[name].[ext]'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: {
                    glob:'pwa/*',
                    dot: true
                },
                to: '[name].[ext]'
            },
            {
                from: {
                    glob:'pwa/**/*.png',
                    dot: true
                },
                to: '[path][name].[ext]'
            }
        ])
    ]
}