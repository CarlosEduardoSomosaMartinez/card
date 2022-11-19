const path=require('path')//una constate para traer path para traer este proyecto
const HtmlWebpackPlugin=require('html-webpack-plugin')


//modulo para los casos de uso

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    resolve:{
        extensions:['.js']
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:true,
            template:'/public/index.html',
            filename:'./index.html',

        })
    ]
    
    
}