// console.log("A")
let a=20
let b=0

setTimeout(() => { 
// console.log("b")
b=100
}, 2000);
console.log(a+b)
// console.log("c")
const fs=require("fs")
// fs.readFile("text/peter.txt","utf-8",(err,data)=>{
//     if(err)
//         {
//             return false
//         }
//     console.log(data)
//     // its async process 
// })


//its sync process
const data=fs.readFileSync("text/kashyap.txt","utf-8",)
console.log(data)
console.log("End Script")