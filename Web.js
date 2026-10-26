const http=require('http')
const fs=require('fs')

http.createServer((req,resp)=>{
    if(req.url=="/")
    {
        resp.write("This is Home page")
        fs.readFile('html/Web.html','utf-8',(err,data)=>{
            if(err){
            resp.writeHead(500,{'content-Type':'text/plain'})
                resp.writable("internal server error")
                resp.end()
                return
            }
            resp.writeHead(200,{'content-Type':'text/html'})
            resp.end();
            resp.end();
        })

    }
    else  if(req.url=="/Login")
    {
        resp.write("This is Login page")
    }
    else
    {
        resp.write("This is other page ")
    }
    resp.write("Hello this is for testing")

    resp.end()
}).listen(6600)
