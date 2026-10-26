const http=require('http')
const userform=require('./userforms')
const userdatasubmit=require('./userdatasubmit')
http.createServer((req,resp)=>{
    resp.writeHead({"content-type":'text/html'})
    if(req.url=="/")
    {
        userform(req,resp)
    }
    else if(req.url=="/submit")
    {
       userdatasubmit(req,resp)
    }
   
    resp.end()
}).listen(3200)