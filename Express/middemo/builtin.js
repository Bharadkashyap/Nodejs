import express from 'express';
import path from 'path';
const app = express();  

app.use(express.static("public"))
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{

const abspath=path.resolve("view/home.html");
    res.sendFile(abspath);
});

app.get("/login",(req,res)=>{
    res.send(`<form action="/submit" method="post">
        <input type="text" name="username" placeholder="enter username">
        <input type="text" name="age" placeholder="enter age">
        <button type="submit">Submit</button>
        </form>`);
});
app.post("/submit",(req,res)=>{
    res.send("<h1>Welcome to submit</h1>",req.body);
});
app.get("/users",(req,res)=>{
    res.send("<h1>Welcome to users</h1>");
});

app.listen(3200);