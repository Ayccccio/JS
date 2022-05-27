const fs = require('fs')

function readFile1(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./text/12.txt', (err,data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}

function readFile2(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./text/2.txt', (err,data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}

function readFile3(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./text/3.txt', (err,data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}

// async 
async function main(){
    let file1 = await readFile1();
    let file2 = await readFile2();
    let file3 = await readFile3();
    console.log([file1,file2,file3].join('/r/n'))
}

main();
