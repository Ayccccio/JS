const express = require('express')
const app = express()
const prot = 80

app.all('/',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')    //设置跨域请求
    res.setHeader('Access-Control-Allow-Headers','*')   //设置允许自定义请求头
    const data = {name:'ay'};
    res.send(`handle(${JSON.stringify(data)})`)         //向客户端发送数据
})

app.listen(prot, ()=>{                                  //设置监听端口
    console.log('express监听已启动,端口' + prot)
})