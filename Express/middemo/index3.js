import express from 'express'
const app = express();


function checkage(req,res,next){
    console.log("middleware executed");
    if(req.query.age<18 || req.query.age==undefined){
        res.send("<h1>you are not allowed</h1>");
    }   else{
        next();
    }
}


function checkurl(req,res,next){
   console.log("this request url is:",req.url);
   next();
   
}

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express</h1>");
});

app.get("/login",checkage,checkurl,(req,res)=>{
    res.send("<h1>Welcome to Login</h1>");
});

app.get("/items",checkage,(req,res)=>{
    res.send("<h1>Welcome to Items</h1>");
});













// function age(req,res,next){ 
//     console.log("middleware executed");
//     if(req.query.age<18 || req.query.age==undefined){
//         res.send("<h1>you are not allowed</h1>");
//     }   else{
//         next();
//     }   
// }
// app.use(age);

// function ipchecker(req,res,next){ 
//     console.log("middleware executed");
//    const ip=req.socket.remoteAddress;
//    console.log(ip);
//    if(ip.includes("192.168.0.129")){
//     res.send("<h1>you are not allowed</h1>");
//    }else{
//     next();
//    }


// }
// app.use(ipchecker);
// app.get("/",(req,res)=>{
//     res.send("<h1>Welcome to Express</h1>");
// });
// app.get("/admin",(req,res)=>{
//     res.send("<h1>Welcome to admin</h1>");
// });
// app.get("/dashboard",(req,res)=>{
//     res.send("<h1>Welcome to dashboard</h1>");
// });

// app.use((req,res,next)=>{
//     console.log("middleware executed");
//     next();
// }   )


// app.get("/users",(req,res)=>{
//     res.send("<h1>Welcome users</h1>");
// });

// app.get("/products",(req,res)=>{
//     res.send("<h1>this is product</h1>");
// });


app.listen(3200);