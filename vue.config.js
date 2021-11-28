module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        }

    },
    lintOnSave:false,//关闭语法检查

    //方式一：开启代理服务器，只能配置一个（不太完美）
   /* devServer: {
        //请求转发给端口号是5000的服务器
        proxy: 'http://localhost:5000'
    },*/


    //方式二：开启代理服务器
    devServer: {
        proxy: {
            //想走代理时候，请求前缀前面加上 /api
            '/api': {
                target: 'http://localhost:5000',
                //代理服务器拿到url转发给服务器5000时候是‘/students’而不是‘ /api/students’
                pathRewrite:{'^/api':''},
                //用于支持websocket
                // ws: true,
                //当服务器5000询问代理服务器来自哪里，changeOrigin: true表示代理服务器说谎，说自己来自5000
                 changeOrigin: true //用于控制请求头中的host值
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/demo':''},

            }
        }
    }

}