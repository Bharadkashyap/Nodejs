const http = require("http");
const fs = require("fs");
const queryString=require('querystring')
http.createServer((req, resp) => {
    fs.readFile('html/form.html', 'utf-8', (err, data) =>  {
      if (err) {
        resp.writeHead(500, { "content-type": "text/plain" });
        resp.end("internal server error ");
        return false;
      } else if (req.url == "/") {
        resp.write(data);
        resp.end();
      } else if (req.url == "/submit") {
        let databody = [];
        

        req.on("data", (chunk) => {
          databody.push(chunk);
        });
        

        req.on("end", () => {
          let rowdata = Buffer.concat(databody).toString();
          let readabledata=queryString.parse(rowdata)
          console.log(readabledata);

          let datastring="my name is "+readabledata.name+"and Email is "+readabledata.email
          console.log(datastring)
          // fs.writeFileSync("text/"+readabledata.name+".txt",datastring);
          // console.log("File created")

          fs.writeFile("text/"+readabledata.name+".txt",datastring,'utf-8',(err)=>{
            if(err)
            {
              resp.end("internal server error ")
              return false;

            }else{
              console.log("File created")
            }
          })
          resp.write( `<h1> data submited</h1>`);
          resp.end();

        });
        
      }
    });
  })
  .listen(3200);