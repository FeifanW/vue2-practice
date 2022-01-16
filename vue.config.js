module.exports = {
    devServer: {
        proxy:{
            '/api':{  // 匹配所有以api开头的请求路径
                target:'http://localhost:5000',   // 代理目标的路径
                changeOrigin:true,
                pathRewrite:{'^/api':''}   // 代理服务器向服务器发送的时候要去掉这个头
            }
        }
    }
}