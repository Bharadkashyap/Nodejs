import express from 'express';


const app=express();



app.get("/",(req,resp)=>{

    resp.send("<h1>Welcome to home page</h1>")
});

app.get("/error",(req,resp)=>{
const error=new Error("");

error.status=404;
next(error);
});
app.use((error,req,resp,next)=>{

    resp.status(error.status || 500).send("<h1>Try after sometime</h1>");
});
app.listen(3200)
