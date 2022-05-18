const express = require('express')
const app = express()
const prot = 80

app.all('/',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:'ay'};
    res.send(`handle(${JSON.stringify(data)})`)
})

app.listen(prot, ()=>{
    console.log('express监听已启动,端口' + prot)
})