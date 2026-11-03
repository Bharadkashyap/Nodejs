const http=require('http')

http.createServer((req,resp)=>{
    
    resp.writeHead(200,{"content-type":'text/html'});
    console.log(req.url)
    if(req.url=='/')
{
    resp.write(`<form action="/submit" method="post">
        <input type="text" placeholder="Enter name" name='name'/>
        <input type="text" placeholder="Enter email" name='email'/>
        <button>submit</button>
        </form>`);
    resp.end();
}
else if(req.url=='/submit')
{
   
    resp.write(`<h1> data submited</h1>`)
    resp.end()
}

}).listen(3200)