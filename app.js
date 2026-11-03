const http=require('http')
const server=http.createServer((req,res)=>{
     res.end("Welcome")
    if(req.url==="/")
    {
        req.end("Home page")
    }
    else if(req.url==="/about")
    {
        req.end("about page")
    }
    else if(req.url==="/contact")
    {
        req.end("contact page")
    }
    else{
        res.statusCode=404;
        req.end("Page not found")
    }
   
})

const PORT=3030
server.listen(PORT,()=>
{
    console.log(`server running at http://localhost:${PORT}`)
})

// const name="kashyap"


// console.log("Name :",name)



// function add(a,b)
// {
//     return a+b;
// }

// function sub(a,b)
// {
//     return a-b;
// }


// function mul(a,b)
// {
//     return a*b;
// }

// function div(a,b)
// {
//     return a/b;
// }
