function userform(req,resp)
{
    resp.write(` <form action="/submit" method="post">
        <input type="text" placeholder="Enter name" name='name'/>
        <input type="text" placeholder="Enter email" name='email'/>
        <button>submit</button>
        </form>`)

}
module.exports=userform