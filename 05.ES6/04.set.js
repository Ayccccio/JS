let arr = [1,2,3,4,5,4,3,2,1];
let arr1 = [4,5,6,7,8];

// 1.数组去重
// ES5
let result = arr.filter((item, index ,arr)=>{
    return arr.indexOf(item,0) == index;
});
console.log('去重', result);

// set数组去重
console.log('去重', [...new Set(arr)]);


// 2.交集

// result = [...new Set(arr)].filter((item, index, arr)=>{
//     return new Set(arr1).has(item);
// })

result = [...new Set(arr)].filter((item)=> new Set(arr1).has(item));    //简化写法
console.log('交集', result);


// 3.并集
result = [...new Set([...arr, ...arr1])]
console.log('并集', result)


// 4.差集
result = [...new Set(arr)].filter((item)=> !(new Set(arr1).has(item)));
console.log('差集', result);