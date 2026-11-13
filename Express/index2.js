import express from 'express'; // es6 syntax
import path from 'path';
const app=express();
const abspath=path.resolve("view/");
const publicpath=path.resolve("public");   
app.use(express.static(publicpath));    
app.get("/",(req,res)=> {
    // console.log(abspath);
    res.sendFile(abspath+"/home.html");
    // res.send
});
app.get("/login",(req,res)=>{
    
    // console.log(abspath);
    res.sendFile(abspath+"/login.html");
});

app.use((req,res)=>{
    res.status(404).sendFile(abspath+"/404.html");
});
app.listen(3200);