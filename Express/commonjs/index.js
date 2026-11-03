// const express=require('express'); // vanila js syntax

import express from 'express'; // es6 syntax
import home, { contact } from './pages/home.js';
import about from './pages/about.js';
import login from './pages/login.js';
import submit from './pages/submit.js';
const app=express();
app.get("/",(req,res)=>{
    res.send(home())
}); 
app.get("/about",(req,res)=>{
    res.send(about());
});

app.get("/login",(req,res)=>{
    res.send(login())
});

 

app.post("/submit",(req,res)=>{
    res.send(submit());
});


app.get("/contact",(req,res)=>{
    res.send(contact());
});
app.listen(3200);
// console.log(app) -> to get the details of the app object 
