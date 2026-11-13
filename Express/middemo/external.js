import express from 'express'
import morgan from 'morgan'  //third party middleware for logging
const app = express();

app.use(morgan('dev'));


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to home page</h1>");
});


app.get("/user",(req,res)=>{
    res.send("<h1>Welcome to user page</h1>");
});

app.get("/wait",(req,resp)=>{
    setTimeout(() => {
        resp.send("response after one second");  
    }, 1000);


})

app.listen(3200);