const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env)=>{
    // const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        mode: env.production ? 'production' : 'development',
        module:{
            rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            { 
                
                test:/\.s?css$/,
                use:[
                    MiniCssExtractPlugin.loader, 
                    {
                        loader:"css-loader",
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                    // 'css-loader',
                    // 'sass-loader'
                ]
                // use:ExtractTextPlugin.extract({
                //     use: [
                //         "css-loader",
                //         "sass-loader"
                //     ]
                // })
                // use:[
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader'
                // ]
                
            }
        ]
        },
        plugins:[
            new MiniCssExtractPlugin({filename:'styles.css'})
            //new ExtractTextPlugin("styles.css")
        ],
        devServer:{
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
        devtool: env.production ? 'source-map' :'inline-source-map',  
    }
}

// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     mode: 'development',
//     module:{
//         rules:[
//         {
//             test:/\.js$/,
//             loader:'babel-loader',
//             exclude:/node_modules/
//         },
//         {
//             use:[
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ],
//             test:/\.s?css$/
//         }
//     ]
//     },
//     devServer:{
//         contentBase: path.join(__dirname,'public'),
//         historyApiFallback: true
//     },
//     devtool: 'eval-cheap-module-source-map'    
// }