module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname+'/index.js',
    output: {
        path: __dirname+'/public',
        filename: 'main.js',
    },
    devServer: {
        contentBase: './public',
        inline: true,
        historyApiFallback: true,
        port: '8090',
    },
    module: {
        rules: [
            {
                test: (/(\.js|\.jsx)$/),
                use:{
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },{
                test: (/\.css$/),
                use:[{
                    loader: "style-loader"  // style-loader: 将所有计算后的样式加入到页面中
                },{
                    loader: "css-loader",    // 用于在js中引入css. 使我们能够使用类似使用类似@import 和 url(...)的方法实现 require()的功能,
                    options: {
                        modules: true,  // 指定启用css modules
                        localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                    }
                }]
            }
        ]
    }
}