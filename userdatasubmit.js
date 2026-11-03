
const queryString=require('querystring')
function userdatasubmit(req,resp)
{
     let databody = [];
        

        req.on("data", (chunk) => {
          databody.push(chunk);
        });
        
          req.on("end", () => {
                  let rowdata = Buffer.concat(databody).toString();
                  let readabledata=queryString.parse(rowdata)
                  let datastring="my name is "+readabledata.name+"and Email is "+readabledata.email
                  console.log(datastring)
 })
    resp.write(`     
    <h1>You can get data from user from here</h1>`)
 

}
module.exports=userdatasubmit