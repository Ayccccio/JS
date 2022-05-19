// 导入fs模块
const fs = require('fs')

// 实例一个promise对象
new Promise((resolve,reject)=>{
    fs.readFile('./text/1.txt',(err,data)=>{        //读取文件
        if(err){    //判断文件是否读取失败
            reject(err)     //失败调用reject方法
        }else{
            resolve(data)   //成功调用resolve方法，并将读取文件的数据传入下一层
        }
    })
}).then((value)=>{      //上一层调用resolve方法后执行该方法，value接收上一层resolve传入的参数
    return new Promise((resolve, reject)=>{         //返回一个promise对象
        fs.readFile('./text/2.txt', (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve([value, data])
            }
        })
    })
},(reason)=>{       //上一层调用reject方法后执行该方法，reason接收上一层reject传入的参数
    console.log(reason)
}).then((value)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./text/3.txt', (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve([...value,data].join('\r\n'))      //拼接
            }
        })
    })
}).then((value)=>{
    console.log(value);
})