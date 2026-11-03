const http = require("http");
const fs = require("fs");
const { log } = require("console");
http
  .createServer((req, resp) => {

// Header code 
let CollectHeaderData=fs.readFileSync("html/Header.html", "utf-8");
let CollectFooterData=fs.readFileSync("html/Footer.html", "utf-8");




let file="/home"
if(req.url!='/')
{
    file=req.url;
}
    if (req.url != "/style.css") {
      fs.readFile("html"+file+".html", "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("internal server error");
          return false;
        }
        console.log();
        

        resp.end(CollectHeaderData+" "+data+""+CollectFooterData);
      });
    } else if (req.url == "/style.css") {
        fs.readFile("html/style.css", "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("css not found  error");
          return false;
        }
        
          resp.writeHead(200, { "content-type": "text/css" });

        resp.end(data);
      });
    }
  })
  .listen(3200);
