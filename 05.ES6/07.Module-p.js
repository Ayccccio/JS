let name = 'jax'
function say(){
    console.log('xiaoming')
}
export let age = 18;    //分别暴露
export let sex = '男'   //分别暴露

export{name, say}       //统一暴露，导出变量及方法

// 默认暴露
export default{
    id:1,
    getName(){
        console.log('get name')
    }
}