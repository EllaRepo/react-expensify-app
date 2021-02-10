const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module:{
        rules:[
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/
        },
        {
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test:/\.s?css$/
        }
    ]
    },
    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    },
    devtool: 'eval-cheap-module-source-map'    
}