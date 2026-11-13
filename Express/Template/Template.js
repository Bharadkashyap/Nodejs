import express from 'express'

const app=express();

app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");


app.get("/",(req,resp)=>{
    resp.render('home',{name:'kashyap',company:'TCS',age:22});
});

app.get("/add-user",(req,resp)=>{
resp.render('addUser')
});
app.post("/submit-user",(req,resp)=>{
    console.log(req.body);
    
    resp.render('submitUser',req.body)

});


app.get("/users",(req,resp)=>{
    const users=['kashyap','dhaval','hemang','jay','smit'];
    resp.render("users",{users:users,isloggin:true})

})

app.listen(3200);